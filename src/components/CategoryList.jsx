import React, { useContext } from "react";
import "../styling/categoryList.css";
// import { GlobalContext } from "../Context";

function CategoryList({ groupedTemplates, templates }) {
  // console.log(groupedTemplates, templates);
  return (
    <div className="parent">
      {groupedTemplates.map((template) => (
        <div className="card" key={template.id}>
          <div className="card-front">
            <img
              src={template.imageUrl}
              alt={template.name}
              className="card-image"
            />
            <div className="text-container">
              <div className="card-text">{template.name}</div>
            </div>
          </div>
          <div className="card-back">
            <img
              src={template.imageUrl}
              alt={template.name}
              className="card-image-back"
            />
            <div>
              <button className="button">Use this</button>
            </div>
            <div className="text-container-back">
              <div className="card-text-back">{template.name}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryList;
