import React from "react";
import { createContext, useState, useEffect } from "react";
import { makeServer } from "./server";

export const GlobalContext = createContext();
const Context = ({ children }) => {
  const [templates, setTemplates] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

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

  // const TemplateItems = templates
  //   ? templates.map((temp) => (
  //       <div key={temp.id} type={temp.type}>
  //         <div>
  //           <img
  //             src={temp.imageUrl}
  //             alt={temp.type}
  //             height="90px"
  //             width="90px"
  //           />
  //         </div>
  //         <div>
  //           Name:{temp.name} Type:{temp.type}
  //         </div>
  //       </div>
  //     ))
  //   : "No data";

  const value = {
    templates,
    filterList,
    setFilterList,
    search,
    setSearch,
  };
  return (
    <GlobalContext.Provider value={value}> {children} </GlobalContext.Provider>
  );
};
export default Context;
