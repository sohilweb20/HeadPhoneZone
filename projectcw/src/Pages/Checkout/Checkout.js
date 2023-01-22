import React from "react";
import Pagelayout from "../../Components/PageLayout/PageLayout";

const Checkout = () => {
  return (
    <Pagelayout>
      <div>
        <h1>Shipping address</h1>
        <form>
          <select value="Country /Region">
            <option value="Country /Region">Country /Region</option>
            <option value="India">India</option>
          </select>
          <div>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="text" placeholder="Address" />
          <div>
            <input type="text" placeholder="City" />
            <select>
              <option>State</option>
              <option>UP</option>
              <option>MP</option>
              <option>DELHI</option>
              <option>MUMBAI</option>
            </select>
            <input type="text" placeholder="Pin code" />
          </div>
          <input type="text" placeholder="Phone" />
          <input type="checkbox" />
          <input type="text" placeholder="Continue to payment method" />
        </form>
      </div>
    </Pagelayout>
  );
};

export default Checkout;
