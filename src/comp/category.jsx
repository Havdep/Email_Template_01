import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../Context";
import "../styling/CategoryList.css";
import SeacrhBar from "./SearchBar";

function CategoryList() {
  const { templates } = useContext(GlobalContext);
  const HolidayItem = templates
    ? templates.filter((temp) => temp.type === "holiday")
    : "No data";
  const TrnItem = templates
    ? templates.filter((temp) => temp.type === "transactional")
    : "No data";
  console.log(typeof templates);
  console.log(TrnItem);
  const NewsItem = templates
    ? templates.filter((temp) => temp.type === "newsletter")
    : "No data";
  const AnnItem = templates
    ? templates.filter((temp) => temp.type === "announcements")
    : "No data";
  console.log(templates);

  return (
    <>
      <div className="parent">
        <SeacrhBar />
        <div className="category">
          <div>
            <li className="category-name">Holidays</li>
          </div>
          <div className="image-card">
            {HolidayItem.map((holiday, index) => (
              <div key={index}>
                <div className="card">
                  <img
                    src={holiday.imageUrl}
                    className="image"
                    alt={holiday.type}
                  />
                  <div>{holiday.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="category">
          <div>
            <li>Transactions</li>
          </div>
          <div className="image-card">
            {TrnItem.map((holiday, index) => (
              <div key={index}>
                <div className="card">
                  <img
                    src={holiday.imageUrl}
                    className="image"
                    alt={holiday.type}
                  />
                  <div>{holiday.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="category">
          <div>
            <li>Newsletter</li>
          </div>
          <div className="image-card">
            {NewsItem.map((holiday, index) => (
              <div key={index}>
                <div className="card">
                  <img
                    src={holiday.imageUrl}
                    className="image"
                    alt={holiday.type}
                  />
                  <div>{holiday.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="category">
          <div>
            <li>Announcements</li>
          </div>
          <div className="image-card">
            {AnnItem.map((holiday, index) => (
              <div key={index}>
                <div className="card">
                  <img
                    src={holiday.imageUrl}
                    className="image"
                    alt={holiday.type}
                  />
                  <div>{holiday.name}</div>
                </div>
              </div>
            ))}{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryList;
