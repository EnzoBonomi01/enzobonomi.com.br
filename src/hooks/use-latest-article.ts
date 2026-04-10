import { useEffect, useMemo, useState } from 'react';

import type { LocalizedCopy, Locale } from '../content/site-content';

const FEED_URL = 'https://enzobonomi.substack.com/feed';
const RSS_PROXY = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(FEED_URL)}`;

interface FeedItem {
  title?: string;
  link?: string;
  pubDate?: string;
  description?: string;
  content?: string;
}

interface FeedResponse {
  items?: FeedItem[];
}

export interface LatestArticle {
  title: string;
  summary: string;
  url: string;
  published: string;
  isFallback: boolean;
}

interface LatestArticleState {
  article: LatestArticle;
  loading: boolean;
}

const stripTags = (value: string): string => value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

const toFallbackArticle = (copy: LocalizedCopy): LatestArticle => ({
  title: copy.fallbackArticle.title,
  summary: copy.fallbackArticle.summary,
  url: copy.fallbackArticle.url,
  published: copy.fallbackArticle.publishedLabel,
  isFallback: true
});

const formatDate = (dateString: string | undefined, locale: Locale, publishedLabel: string): string => {
  if (!dateString) {
    return publishedLabel;
  }

  const parsed = new Date(dateString);
  if (Number.isNaN(parsed.getTime())) {
    return publishedLabel;
  }

  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  }).format(parsed);
};

export const useLatestArticle = (locale: Locale, copy: LocalizedCopy): LatestArticleState => {
  const fallbackArticle = useMemo(() => toFallbackArticle(copy), [copy]);
  const [article, setArticle] = useState<LatestArticle>(fallbackArticle);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isActive = true;
    const controller = new AbortController();

    const loadArticle = async (): Promise<void> => {
      setLoading(true);

      try {
        const response = await fetch(RSS_PROXY, {
          signal: controller.signal,
          headers: {
            Accept: 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Feed unavailable');
        }

        const data = (await response.json()) as FeedResponse;
        const latest = data.items?.[0];

        if (!latest?.title || !latest.link) {
          throw new Error('Missing latest article');
        }

        const rawSummary = latest.description ?? latest.content ?? '';
        const summary = stripTags(rawSummary).slice(0, 220) || copy.fallbackArticle.summary;

        if (isActive) {
          setArticle({
            title: latest.title,
            summary,
            url: latest.link,
            published: formatDate(latest.pubDate, locale, copy.fallbackArticle.publishedLabel),
            isFallback: false
          });
        }
      } catch {
        if (isActive) {
          setArticle(fallbackArticle);
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    };

    void loadArticle();

    return () => {
      isActive = false;
      controller.abort();
    };
  }, [copy, fallbackArticle, locale]);

  return { article, loading };
};
