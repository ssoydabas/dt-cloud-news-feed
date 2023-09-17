import { useEffect, MutableRefObject } from "react";
import { useFetchNews } from "~root/services/news/hooks";

export default function useFlatList(ref: MutableRefObject<HTMLElement | null>) {
  const { fetchNews } = useFetchNews();

  useEffect(() => {
    const currentRef = ref.current;

    const handleScroll = () => {
      if (!currentRef) return;

      const isBottom =
        Math.round(currentRef.scrollTop + currentRef.clientHeight) >=
        currentRef.scrollHeight;

      if (isBottom) {
        fetchNews();
      }
    };

    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, [fetchNews, ref]);
}
