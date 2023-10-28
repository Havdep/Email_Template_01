import React, { useState } from "react";
import { GlobalContext } from "../Context";
import "../styling/searchbar.css"; // Import the CSS file

const SearchBar = ({ setTemplates, templates, searchTerm, onSearch }) => {
  const [sortBy, setSortBy] = useState("Recent");
  console.log(searchTerm);
  const handleSearch = (e) => {
    const term = e.target.value;
    onSearch(term);
  };

  return (
    <div className="search-bar-container">
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search email templates"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="sort-container">
        <label className="sort-label">Sort by:</label>
        <select
          className="sort-select"
          value={sortBy}
          // onChange={handleSortChange}
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
