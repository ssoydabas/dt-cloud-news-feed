import { useFilters, useFilterDispatch } from "~root/services/filter/hooks";
import {
  useSources,
  useCategories,
  useAuthors,
} from "~root/services/news/hooks";

import { Filter } from "./components";

export default function FiltersSection() {
  const sources = useSources();
  const categories = useCategories();
  const authors = useAuthors();

  const { source, category, author } = useFilters();
  const { setSource, setCategory, setAuthor } = useFilterDispatch();

  return (
    <div className="flex flex-col space-y-6 items-center col-span-1 px-4 border-r">
      <h2 className="w-full text-center text-xl italic">Filters</h2>

      <Filter
        title="Source"
        filter={source}
        setFilter={setSource}
        options={sources}
      />
      <Filter
        title="Category"
        filter={category}
        setFilter={setCategory}
        options={categories}
      />
      <Filter
        title="Author"
        filter={author}
        setFilter={setAuthor}
        options={authors}
      />
    </div>
  );
}
