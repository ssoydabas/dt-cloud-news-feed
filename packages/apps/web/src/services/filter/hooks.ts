import { useContext, useCallback } from "react";

import FilterContext from "./FilterContext";

const useFilterContext = () => useContext(FilterContext);

export const useFilters = () => {
  const { source, category, author } = useFilterContext();
  return { source, category, author };
};

export const useFilterDispatch = () => {
  const { dispatch } = useFilterContext();

  const setSource = useCallback(
    (source: string) => {
      dispatch?.({
        type: "SET_SOURCE",
        payload: source,
      });
    },
    [dispatch]
  );

  const setCategory = useCallback(
    (category: string) => {
      dispatch?.({
        type: "SET_CATEGORY",
        payload: category,
      });
    },
    [dispatch]
  );

  const setAuthor = useCallback(
    (author: string) => {
      dispatch?.({
        type: "SET_AUTHOR",
        payload: author,
      });
    },
    [dispatch]
  );

  return { setSource, setCategory, setAuthor };
};
