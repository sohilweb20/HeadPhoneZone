import React from "react";
import "./Singlepage.css";

const ShoppingComp = ({ item }) => {
  return (
    <div className="Singlepage">
      <div>
        <img className="SingleImages" src={item.Poster} alt="" />

        <div className="Titles">
          <h1>{item.Title}</h1>
          <h4>Price - {item.Price}</h4>
          <h3> {item.Heading}</h3>
        </div>
      </div>
    </div>
  );
};

export default ShoppingComp;
