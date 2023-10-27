import React, { useEffect, useState } from "react";
import { makeServer } from "../server";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Cards from "./Cards";
import GroupCrad from "./GroupCrad";
import "../styling/body.css";

function Body() {
  //   const [templates, setTemplates] = useState([]);
  //   const [loading, setLoading] = useState(true);

  //   makeServer();
  //   useEffect(() => {
  //     fetch("/api")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setTemplates(data.templates.models);
  //         setLoading(false);
  //         console.log(templates);
  //       })
  //       .catch((error) => {
  //         console.error("Error parsing JSON:", error);
  //         setLoading(false);
  //       });
  //   }, []);

  //   const TemplateItems = templates
  //     ? templates.map((temp) => <div key={temp.id}>{temp.type}</div>)
  //     : "No data";

  return (
    <>
      <Header />

      <span className="content-container">
        <Sidebar />
        <GroupCrad />
      </span>
    </>
  );
}

export default Body;
