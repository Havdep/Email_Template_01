import React from "react";
import "../styling/header.css";
import img1 from "../assets/image1.svg";

function Header() {
  return (
    <>
      <div className="heading">
        <span className="marketplace">Marketplace</span>
        <h1>
          <div className="roller">
            <span className="roll-text">
              Email Templates <br /> Email Sequences <br /> Marketing Recipes
            </span>
          </div>
          <br />
          <span className="black-text">
            by the community, for the community
          </span>
        </h1>
        <p className="small-text">
          100s of free templates to help you craft the perfect marketing
          journey.
        </p>
      </div>
    </>
  );
}

export default Header;
