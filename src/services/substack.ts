export type LatestSubstackPost = {
  title: string;
  url: string;
  dateISO: string;
  description: string;
};

type SubstackPostResponse = {
  title?: string;
  canonical_url?: string;
  post_date?: string;
  description?: string;
  is_published?: boolean;
};

const FALLBACK_POST: LatestSubstackPost = {
  title: "Ideacao e validacao de produto - palestra completa",
  url: "https://enzobonomi.substack.com/p/ideacao-e-validacao-de-produto-palestra",
  dateISO: "2025-11-07T01:06:40.912Z",
  description:
    "Ontem tive o prazer de palestrar na semana academica da faculdade de Senac, em Maringa, para a turma do curso de analise e desenvolvimento de sistemas."
};

const SUBSTACK_SOURCE_URL = "https://enzobonomi.substack.com/api/v1/posts?limit=1";
const SUBSTACK_PROXY_URL = `https://api.allorigins.win/raw?url=${encodeURIComponent(SUBSTACK_SOURCE_URL)}`;

export async function fetchLatestSubstackPost(): Promise<LatestSubstackPost | null> {
  try {
    const response = await fetch(SUBSTACK_PROXY_URL, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      return FALLBACK_POST;
    }

    const payload = (await response.json()) as SubstackPostResponse[];
    const firstPublishedPost = payload.find((post) => post.is_published !== false);

    if (!firstPublishedPost || !firstPublishedPost.title || !firstPublishedPost.canonical_url || !firstPublishedPost.post_date) {
      return FALLBACK_POST;
    }

    return {
      title: firstPublishedPost.title,
      url: firstPublishedPost.canonical_url,
      dateISO: firstPublishedPost.post_date,
      description: firstPublishedPost.description?.trim() || FALLBACK_POST.description
    };
  } catch {
    return FALLBACK_POST;
  }
}

