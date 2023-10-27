import React, { useContext } from "react";
import { GlobalContext } from "../Context";

function Cards() {
  const TemplateItems = useContext(GlobalContext);

  return (
    <>
      <div>{TemplateItems}</div>
    </>
  );
}

export default Cards;
