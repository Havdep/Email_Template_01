import React, { useContext } from "react";
import { GlobalContext } from "../Context";
import CategoryList from "./CategoryList";
import "../styling/groupcard.css";

function GroupCrad() {
  const { templates } = useContext(GlobalContext);

  // Group templates by type
  const groupedTemplates = templates.reduce((groups, template) => {
    if (!groups[template.type]) {
      groups[template.type] = [];
    }
    groups[template.type].push(template);
    return groups;
  }, {});

  return (
    <div className="container">
      {Object.keys(groupedTemplates).map((type) => (
        <div>
          <div key={type} className="card-type">
            <div>{type}</div>
          </div>
          <div className="card">
            <CategoryList templates={groupedTemplates[type]} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default GroupCrad;
