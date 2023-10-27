import React from "react";
import Cards from "./Cards";

function CategoryList() {
  return (
    <>
      <div>
        <li>Holidays</li>
        <Cards />
      </div>
      <div>
        <li>Transactions</li>
      </div>
      <div>
        <li>Newsletter</li>
      </div>
      <div>
        <li>Announcements</li>
      </div>
    </>
  );
}

export default CategoryList;
