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

  const filterConfig = [
    { title: "Source", filter: source, setFilter: setSource, options: sources },
    {
      title: "Category",
      filter: category,
      setFilter: setCategory,
      options: categories,
    },
    { title: "Author", filter: author, setFilter: setAuthor, options: authors },
  ];

  return (
    <div className="flex flex-col space-y-6 items-center col-span-1 px-4 border-r">
      <h2 className="w-full text-center text-xl italic">Filters</h2>

      {filterConfig.map(({ title, filter, setFilter, options }) => (
        <Filter
          key={title}
          title={title}
          filter={filter}
          setFilter={setFilter}
          options={options}
        />
      ))}
    </div>
  );
}
