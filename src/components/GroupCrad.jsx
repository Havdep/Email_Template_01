import React, { useContext } from "react";
import { GlobalContext } from "../Context";
import CategoryList from "./CategoryList";
import "../styling/groupcard.css";
import SearchBar from "./SearchBar";

function GroupCrad() {
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

  // Group templates by type
  const groupedTemplates = filteredTemplates.reduce((groups, template) => {
    if (!groups[template.type]) {
      groups[template.type] = [];
    }
    groups[template.type].push(template);
    return groups;
  }, {});

  return (
    <>
      <div className="container">
        <div className="parent-cont">
          <SearchBar searchTerm={search} onSearch={setSearch} />
        </div>
        {Object.keys(groupedTemplates).map((type) => (
          <div className="card-type-wrap">
            <div key={type} className="card-type">
              <div>{type}</div>
            </div>
            <div className="card">
              <CategoryList templates={groupedTemplates[type]} />
            </div>
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
