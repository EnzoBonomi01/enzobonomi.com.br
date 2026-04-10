import type { LocalizedCopy, Locale } from '../content/site-content';
import type { LatestArticle } from '../hooks/use-latest-article';

export interface LandingPageProps {
  copy: LocalizedCopy;
  article: LatestArticle;
  loading: boolean;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}
