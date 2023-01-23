import React from "react";
import "./Checkout.css";
// import Pagelayout from "../../Components/PageLayout/PageLayout";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

const Checkout = () => {
  const CartData = useSelector((state) => state.AppReducer.cart);

  return (
    <div className="upper">
      <div className="given">
        <h1>Contact Information</h1>
        <input type={"text"} placeholder="Email " />
      </div>

      <div className="partes">
        <form>
          <h1 className="start">Shipping address</h1>
          <select className="countreis" value="Country /Region">
            <option value="Country /Region">Country /Region</option>
            <option value="India">India</option>
          </select>
          <div className="names">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input className="countreis" type="text" placeholder="Address" />
          <div className="thierds">
            <input type="text" placeholder="City" />
            <select className="selects">
              <option>State</option>
              <option>UP</option>
              <option>MP</option>
              <option>DELHI</option>
              <option>MUMBAI</option>
            </select>
            <input type="text" placeholder="Pin code" />
          </div>
          <input className="countreis" type="text" placeholder="Phone" />
          <div className="names2">
            <input type="checkbox" />
            <p> Save this information for next time</p>
          </div>

          <div className="continue">
            <h1>Continue to payment method</h1>
          </div>
        </form>
        {/* second part */}
        <div className="hellos">
          <div className="finacart">
            {CartData.length > 0 &&
              CartData.map((item) => (
                <div className=" innerFirst">
                  <div>
                    <img style={{ width: "80px" }} src={item.Poster} alt="" />
                  </div>
                  <div className="innetSecond">
                    <h1> {item.Title} </h1>
                    <p> INR - {item.Price}</p>
                  </div>
                </div>
              ))}
          </div>
          <div className="coupen">
            <input type={"text"} placeholder="Gift card and discount Code" />
            <button>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
