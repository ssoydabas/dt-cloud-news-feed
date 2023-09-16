import { Filter } from "./components";

export default function FiltersSection() {
  return (
    <div className="flex flex-col space-y-6 items-center col-span-1 px-4 border-r">
      <h2 className="w-full text-center text-xl italic">Filters</h2>

      <Filter title="Source" />
      <Filter title="Category" />
      <Filter title="Author" />
    </div>
  );
}
