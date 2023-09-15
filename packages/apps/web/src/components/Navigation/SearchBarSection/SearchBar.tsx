export default function SearchBar() {
  return (
    <div className="flex items-center rounded-full px-4 border-2">
      <div className="px-4">
        <img src="/assets/magnifier.svg" alt="Magnifier" className="w-4 h-4" />
      </div>

      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent outline-none p-2 rounded-full w-full text-sm"
      />
    </div>
  );
}
