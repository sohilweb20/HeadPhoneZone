import React from "react";
import "./Home.css";
const SecondBoxes = () => {
  return (
    <div>
      <div className="flexbox3">
        <div className="flexbox4">
          <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/simpl-homepage_238x.png?v=1661144152" />
          <p className="secondP">
            10% CASHBACK UP TO ₹1000/- ON ORDERS ABOVE ₹2,999/-
          </p>
          <p className="secondP2">
            <p>Valid from 22nd September to 30th September</p>
            <p>Tenure Available: 3 Months</p>
            <p>Transaction Value for Cashback: Rs. 2,999</p>
            <p>Payment Gateway: Select Simpl Pay in 3 at Checkout</p>
          </p>
        </div>
        <div className="flexbox4">
          <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/axio-homepage-2_189x.png?v=1663921200" />
          <p className="secondP">FLAT 10% CASHBACK UPTO ₹1000/- WITH AXIO</p>
          <p className="secondP2">
            <p>Valid from 23rd September till 31st October, 2022</p>
            <p>Tenure available: 3 and 6 Months</p>
            <p>Transaction value: Available on all orders above Rs. 1,000/-</p>
            <p>Payment Gateway: Choose Razorpay at checkout</p>
          </p>
        </div>
        <div className="flexbox4">
          <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/Headphones-Zone-bajaj-finserv-logo_254x.png?v=1657960437" />
          <p className="secondP">NO COST EMI WITH BAJAJ FINSERV</p>
          <p className="secondP2">
            <p>Tenure available: 3 Months</p>
            <p>
              Eligibility: All Bajaj Finserv card owners
              <br />
            </p>
            <p>
              Transaction value: Available on all orders above Rs. 4,500/-
              <br />
            </p>
            <p>Payment Gateway: Choose Razorpay at checkout</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondBoxes;
