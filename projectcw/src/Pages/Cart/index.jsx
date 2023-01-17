import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getcartdata } from "../../Redux/AppReducer/action";
import SingleCartProd from "./SingleCartProd";
import Pagelayout from "../../Components/PageLayout/PageLayout";

const Cart = () => {
  const dispatch = useDispatch();
  const CartData = useSelector((state) => state.AppReducer.cart);

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
      <h1>CART</h1>
      <div className="ShoppingComp">
        <div>
          {/* {Loading && "PLease Wait Data is Loading"} */}
          {CartData.length > 0 &&
            CartData.map((item) => {
              return (
                <SingleCartProd
                  key={item.id}
                  item={item}
                  HandleRemove={HandleRemove}
                />
              );
            })}
        </div>
      </div>
    </Pagelayout>
  );
};

export default Cart;
