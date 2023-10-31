import React, { useContext } from "react";
import { GlobalContext } from "../Context";
import CategoryList from "./CategoryList";
import "../styling/groupcard.css";
import SearchBar from "./SearchBar";

function GroupCrad() {
  const { templates, filterList, search, setSearch, sortBy, setSortBy } =
    useContext(GlobalContext);

  // Filter the templates based on the selected filterList
  const filteredTemplates = templates
    .filter((template) => {
      const typeFilter = //search type se filter
        filterList.length === 0 || filterList.includes(template.type);
      const searchFilter = search
        ? template.type.toLowerCase().includes(search.toLowerCase())
        : true;
      return typeFilter && searchFilter;
    })
    .sort((a, b) => {
      if (sortBy === "Popular") {
        return b.popularity - a.popularity;
      } else if (sortBy === "Oldest") {
        return new Date(a.date) - new Date(b.date);
      } else if (sortBy === "Recent") {
        return new Date(b.date) - new Date(a.date);
      }
      return 0;
    });
  // Group templates by type
  const groupedTemplates = filteredTemplates.reduce((groups, template) => {
    if (!groups[template.type]) {
      groups[template.type] = [];
    }
    groups[template.type].push(template);
    return groups;
  }, {});
  console.log("Filtered Templates: ", filteredTemplates);
  console.log("Grouped Templates: ", groupedTemplates);

  return (
    <>
      <div className="container">
        <div className="parent-cont">
          <SearchBar />
        </div>
        {Object.keys(groupedTemplates).map((type) => (
          <div className="card-type-wrap">
            <div key={type}>
              <div className="card-type">{type}</div>
            </div>

            <CategoryList
              groupedTemplates={groupedTemplates[type]}
              templates={templates}
            />
          </div>
        ))}
        {Object.keys(groupedTemplates).length === 0 && (
          <div className="no-results">No search results found.</div>
        )}
      </div>
    </>
  );
}

export default GroupCrad;
