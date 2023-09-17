import { useState } from "react";
import { useSetKeyword } from "~root/services/news/hooks";

import { useFilterDispatch } from "~root/services/filter/hooks";

export default function SearchBar() {
  const [keyword, setKeywordState] = useState("");
  const setKeyword = useSetKeyword();

  const { setCategory } = useFilterDispatch();

  const handleSearch = () => {
    setKeyword(keyword);
    setCategory(keyword);
  };

  return (
    <div className="flex items-center rounded-full px-2 border-2">
      <div className="px-2">
        <img src="/assets/magnifier.svg" alt="Magnifier" className="w-6 h-6" />
      </div>

      <input
        type="text"
        placeholder="Type here..."
        className="bg-transparent outline-none p-2 rounded-full w-full text-sm"
        onChange={(e) => setKeywordState(e.target.value)}
      />

      <button
        className="px-2 text-sm border rounded-full"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}
