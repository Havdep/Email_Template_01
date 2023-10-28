import React from "react";
import "../styling/categoryList.css";

function CategoryList({ templates }) {
  return (
    <div className="parent">
      {templates.map((template) => (
        <div className="card" key={template.id}>
          <img
            src={template.imageUrl}
            alt={template.name}
            className="card-image"
          />
          <div className="text-container">
            <div className="card-text">{template.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryList;
