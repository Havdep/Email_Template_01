import React, { useEffect, useState } from "react";
import { makeServer } from "../server";

function Cards() {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  // Initialize the Mirage server before making the API request.
  makeServer();
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setTemplates(data.templates.models);
        setLoading(false);
        console.log(templates);
      })
      .catch((error) => {
        console.error("Error parsing JSON:", error);
        setLoading(false);
      });
  }, []);

  const TemplateItems = templates
    ? templates.map((temp) => <div key={temp.id}>{temp.type}</div>)
    : "No data";

  return <div>{loading ? "LOADING..." : <div>{TemplateItems}</div>}</div>;
}

export default Cards;
