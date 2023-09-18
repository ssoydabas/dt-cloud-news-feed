import { useFilters, useFilterDispatch } from "~root/services/filter/hooks";
import {
  useSources,
  useCategories,
  useAuthors,
  useDates,
} from "~root/services/news/hooks";

import { Filter } from "./components";
import { toReadableDate } from "~root/services/date";

export default function FiltersSection() {
  const sources = useSources();
  const categories = useCategories();
  const authors = useAuthors();
  const dates = useDates().map((date) => toReadableDate(date));

  const { source, category, author, date } = useFilters();
  const { setSource, setCategory, setAuthor, setDate } = useFilterDispatch();

  const filterConfig = [
    { title: "Date", filter: date, setFilter: setDate, options: dates },
    {
      title: "Category",
      filter: category,
      setFilter: setCategory,
      options: categories,
    },
    { title: "Author", filter: author, setFilter: setAuthor, options: authors },
    { title: "Source", filter: source, setFilter: setSource, options: sources },
  ];

  return (
    <div className="flex flex-col space-y-6 items-center col-span-1 px-4 border-r">
      <h2 className="w-full text-center text-xl italic">Filters</h2>

      {filterConfig.map(({ title, filter, setFilter, options }, index) => (
        <Filter
          key={`${index} - ${Math.random()}`}
          title={title}
          filter={filter}
          setFilter={setFilter}
          options={options}
        />
      ))}
    </div>
  );
}
