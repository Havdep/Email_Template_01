import React, { useContext, useState } from "react";
import { GlobalContext } from "../Context";
import "../styling/CategoryList.css";
import SearchBar from "./SearchBar"; // Corrected component name

function CategoryList() {
  const { templates, filterList, search, setSearch } =
    useContext(GlobalContext);

  // Filter the templates based on the selected filterList
  const filteredTemplates = templates.filter((template) => {
    const typeFilter =
      filterList.length === 0 || filterList.includes(template.type);
    const searchFilter = search
      ? template.type.toLowerCase().includes(search.toLowerCase())
      : true;
    return typeFilter && searchFilter;
  });
  const groupedCards = filteredTemplates.reduce((groups, template) => {
    if (!groups[template.type]) {
      groups[template.type] = [];
    }
    groups[template.type].push(template);
    return groups;
  }, {});

  return (
    <div className="parent">
      <SearchBar searchTerm={search} onSearch={setSearch} />

      <div className="categories">
        {Object.keys(groupedCards).map((type, index) => (
          <div key={index} className="category">
            <li className="category-name">{type}</li>
            <div className="image-card">
              {groupedCards[type].map((template, index) => (
                <div key={index} className="card">
                  <img
                    src={template.imageUrl}
                    className="image"
                    alt={template.type}
                  />
                  <div className="temp-name">{template.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
