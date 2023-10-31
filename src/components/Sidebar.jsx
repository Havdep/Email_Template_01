import React, { useContext } from "react";
import { GlobalContext } from "../Context";
import "../styling/sidebar.css";

function Sidebar() {
  const { filterList, setFilterList } = useContext(GlobalContext);

  const handleFilter = (filter) => {
    setFilterList((prevFilterList) => {
      //toggle karne k liye
      if (prevFilterList.includes(filter)) {
        return prevFilterList.filter((item) => item !== filter);
      } else {
        return [...prevFilterList, filter];
      }
    });
    console.log("filter list updated");
  };

  return (
    <div className="parent">
      <div className="labels">
        <label>
          <input
            type="checkbox"
            name="announcements"
            onChange={() => handleFilter("announcements")}
          />
          Announcements
        </label>
        <label>
          <input
            type="checkbox"
            name="transactional"
            onChange={() => handleFilter("transactional")}
          />
          Transactional
        </label>
        <label>
          <input
            type="checkbox"
            name="events"
            onChange={() => handleFilter("newsletter")}
          />
          Newsletter
        </label>
        <label>
          <input
            type="checkbox"
            name="holiday"
            onChange={() => handleFilter("holiday")}
          />
          Holiday
        </label>
      </div>
    </div>
  );
}

export default Sidebar;
