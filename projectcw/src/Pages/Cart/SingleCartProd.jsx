import React from "react";
import "./Cart.css";

const SingleCartProd = ({ item, HandleRemove }) => {
  return (
    <div className="DisplayFlex">
      <div className="carts">
        <div className="Carts2">
          <div>
            <img style={{ width: "200px" }} src={item.Poster} alt="" />
          </div>
          <div>
            <h1>{item.Title}</h1>
            <p>{item.Price}</p>
            <h2 onClick={() => HandleRemove(item.id)}>Remove</h2>
          </div>
        </div>
      </div>
      <div>HELLO</div>
    </div>
  );
};

export default SingleCartProd;
