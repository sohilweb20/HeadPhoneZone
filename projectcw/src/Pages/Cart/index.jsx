import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getcartdata } from "../../Redux/AppReducer/action";
// import SingleCartProd from "./SingleCartProd";
import Pagelayout from "../../Components/PageLayout/PageLayout";
// import { Loading } from "../../Components/Loading/Loading";
import "./Cart.css";
import { Link } from "react-router-dom";
const Cart = () => {
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const CartData = useSelector((state) => state.AppReducer.cart);
  // const isLoading = useSelector((state) => state.AppReducer.isLoading);

  useEffect(() => {
    dispatch(getcartdata);
    const count = CartData.reduce((a, b) => {
      return a + Number(b.Price);
    }, 0);
    setTotal(count);
  }, [dispatch, CartData]);

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
      {CartData.length <= 0 && <h1>Cart is empty Now ! Please Do Shopping</h1>}
      <div className="ShoppingComp">
        <div className="firstPart">
          {/* {isLoading && <Loading />} */}
          {CartData.length > 0 &&
            CartData.map((item) => (
              <div className="innerFirst">
                <div>
                  <img className="imagesCart" src={item.Poster} alt="" />
                </div>
                <div className="innetSecond">
                  <h1>Product Name : {item.Title}</h1>
                  <p> Proce : {item.Price}</p>
                  <button onClick={() => HandleRemove(item.id)}>Remove</button>
                </div>
              </div>
            ))}
        </div>
        <div className="secondPart">
          <div>
            <h1>Total: {total} Rs. </h1>
            <Link to="/Checkout">
              <button className="ButtonShop">Continue Shopping</button>
            </Link>
          </div>
        </div>
      </div>
    </Pagelayout>
  );
};

export default Cart;
