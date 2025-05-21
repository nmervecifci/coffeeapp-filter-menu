import React, { useState } from "react";
import search from "../assets/search_icon.png";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };
  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <img
            src={search}
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-[#F2E6D1] dark:border-gray-600 dark:placeholder-gray-400 dark:text-black"
          onChange={handleChange}
          placeholder="Search "
          required
        />
        <button className="text-white absolute end-2.5 bottom-2.5 bg-[#4E3319] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#4E3319] dark:hover:bg-black dark:focus:ring-[#4E3319]">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
