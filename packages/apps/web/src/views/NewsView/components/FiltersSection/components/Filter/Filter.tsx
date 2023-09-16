export interface IFilterProps {
  title: string;
}

export default function Filter({ title }: IFilterProps) {
  const options = ["nyt", "na"];

  return (
    <div className="flex flex-col space-y-4 w-full py-4 border-b">
      <div>{title}</div>

      <select
        onChange={(e) => {
          console.log(e.target.value);
        }}
        className="w-11/12 mx-auto px-4 py-2 border-2 outline-none bg-transparent rounded-xl text-sm"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
