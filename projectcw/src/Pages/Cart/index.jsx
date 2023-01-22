import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getcartdata } from "../../Redux/AppReducer/action";
// import SingleCartProd from "./SingleCartProd";
import Pagelayout from "../../Components/PageLayout/PageLayout";
import { Loading } from "../../Components/Loading/Loading";
import "./Cart.css";
import { Link } from "react-router-dom";
const Cart = () => {
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const CartData = useSelector((state) => state.AppReducer.cart);
  const isLoading = useSelector((state) => state.AppReducer.isLoading);
  useEffect(() => {
    dispatch(getcartdata);
  }, [dispatch]);

  const HandleRemove = (id) => {
    axios
      .delete(`https://emptyapi.onrender.com/cart/${id}`)
      .then((r) => {
        dispatch(getcartdata);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // console.log("CartData", CartData);
  return (
    <Pagelayout>
      <h1 className="h1">CART</h1>
      <div className="ShoppingComp">
        <div className="firstPart">
          {isLoading && <Loading />}
          {CartData.length > 0 &&
            CartData.map((item) => (
              <div className="innerFirst">
                <div>
                  <img style={{ width: "150px" }} src={item.Poster} alt="" />
                </div>
                <div className="innetSecond">
                  <h1>{item.Title}</h1>
                  <p>{item.Price}</p>
                  <button onClick={() => HandleRemove(item.id)}>Remove</button>
                </div>
              </div>
            ))}
        </div>
        <div className="secondPart">
          <div>
            <h1>Total: $ </h1>
            <Link to="/Checkout">
              <h1>Continue Shopping</h1>
            </Link>
          </div>
        </div>
      </div>
    </Pagelayout>
  );
};

export default Cart;
