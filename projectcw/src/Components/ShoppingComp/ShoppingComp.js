import React from "react";
import "./Singlepage.css";

const ShoppingComp = ({ item }) => {
  return (
    <div className="Singlepage">
      <div>
        <img src={item.Poster} alt="" />

        <div>
          <h1>{item.Title}</h1>
          <h4>Price - {item.Price}</h4>
          <h3> {item.Heading}</h3>
        </div>
      </div>
    </div>
  );
};

export default ShoppingComp;