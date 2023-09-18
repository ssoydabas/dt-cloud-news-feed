export interface IFilterProps {
  title: string;
  filter: string;
  setFilter: (value: string) => void;
  options: string[];
}

export default function Filter({
  title,
  filter,
  setFilter,
  options,
}: IFilterProps) {
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFilter(value);
  };

  return (
    <div className="flex flex-col space-y-4 w-full py-4 border-b">
      <div>{title}</div>

      <select
        value={filter}
        onChange={handleFilterChange}
        className="w-11/12 mx-auto px-4 py-2 border-2 outline-none bg-transparent rounded-xl text-sm"
      >
        <option value="">Select a {title}</option>
        {options.map((option, index) => (
          <option key={`${index} - ${Math.random()}`} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
