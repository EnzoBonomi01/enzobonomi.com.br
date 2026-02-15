import { useEffect, useState } from "react";
import { fetchLatestSubstackPost, type LatestSubstackPost } from "../services/substack";

type LatestPostState = {
  post: LatestSubstackPost | null;
  isLoading: boolean;
  hasError: boolean;
};

export function useLatestSubstackPost(): LatestPostState {
  const [post, setPost] = useState<LatestSubstackPost | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    async function loadLatestPost() {
      setIsLoading(true);
      setHasError(false);

      try {
        const response = await fetchLatestSubstackPost();
        if (!isMounted) {
          return;
        }

        if (!response) {
          setHasError(true);
          return;
        }

        setPost(response);
      } catch {
        if (isMounted) {
          setHasError(true);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    void loadLatestPost();

    return () => {
      isMounted = false;
    };
  }, []);

  return { post, isLoading, hasError };
}

export function formatArticleDate(dateISO: string): string {
  const date = new Date(dateISO);
  if (Number.isNaN(date.getTime())) {
    return dateISO;
  }

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  }).format(date);
}

