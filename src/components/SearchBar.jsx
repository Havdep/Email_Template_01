import React, { useState } from "react";
import { GlobalContext } from "../Context";

const SeacrhBar = ({ setTemplates, templates, searchTerm, onSearch }) => {
  const [sortBy, setSortBy] = useState("Recent");
  console.log(searchTerm);
  const handleSearch = (e) => {
    const term = e.target.value;
    onSearch(term);
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      //   borderBottom: "1px solid #d1d1d1",
      padding: "10px",
    },
    searchContainer: {
      flex: "1",
      marginRight: "20px",
    },
    input: {
      width: "384px",
      padding: "8px 12px",
      border: "1px solid #d1d1d1",
      borderRadius: "5px",
      outline: "none",
    },
    sortContainer: {
      display: "flex",
      alignItems: "center",
    },
    label: {
      marginRight: "8px",
    },
    select: {
      padding: "8px 12px",
      border: "1px solid #d1d1d1",
      borderRadius: "5px",
      outline: "none",
      color: "#4589FF",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.searchContainer}>
        <input
          style={styles.input}
          type="text"
          placeholder="Search email templates"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div style={styles.sortContainer}>
        <label style={styles.label}>Sort by:</label>
        <select
          style={styles.select}
          value={sortBy}
          //   onChange={handleSortChange}
        >
          <option value="Recent">Recent</option>
          <option value="Oldest">Oldest</option>
          <option value="Popular">Popular</option>
        </select>
      </div>
    </div>
  );
};

export default SeacrhBar;
