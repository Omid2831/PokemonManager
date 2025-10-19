import React, { useState } from "react";

type SearchBarProps = {
  onSearch?: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const submit = () => {
    const q = value.trim();
    if (q) {
      onSearch?.(q);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") submit();
  };

  return (
    <div className="max-w-2xl mx-auto w-full">
      <label className="sr-only" htmlFor="pokemon-search">Search Pokémon</label>
      <div className="flex items-center gap-2">
        <div className="flex flex-1 items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-slate-400"
            aria-hidden="true"
          >
            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 4.243 11.943l3.282 3.282a.75.75 0 1 0 1.06-1.06l-3.282-3.283A6.75 6.75 0 0 0 10.5 3.75Zm-5.25 6.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Z" clipRule="evenodd" />
          </svg>
          <input
            id="pokemon-search"
            type="text"
            placeholder="Search Pokémon by name (e.g., pikachu)"
            aria-label="Search for Pokémon"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDown}
            className="flex-1 bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none"
          />
        </div>
        <button
          onClick={submit}
          className="inline-flex items-center justify-center h-11 px-5 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800 transition-colors duration-150 font-medium shadow"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
