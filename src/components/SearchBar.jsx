import React, { useContext, useState } from "react";
import { GlobalContext } from "../Context";
import "../styling/searchbar.css"; // Import the CSS file

const SearchBar = () => {
  const { setTemplates, templates, search, setSearch, sortBy, setSortBy } =
    useContext(GlobalContext);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearch(term);
  };

  return (
    <div className="search-bar-container">
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search email templates"
          value={search}
          onChange={handleSearch}
        />
      </div>
      <div className="sort-container">
        <label className="sort-label">Sort by:</label>
        <select
          className="sort-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="Recent">Recent</option>
          <option value="Oldest">Oldest</option>
          <option value="Popular">Popular</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
