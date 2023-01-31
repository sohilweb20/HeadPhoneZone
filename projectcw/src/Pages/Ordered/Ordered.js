import { useToast } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Order.css";
const Ordered = () => {
  const toast = useToast();
  let datParsed = JSON.parse(localStorage.getItem("FormDataUser")) || [];
  // console.log(datParsed);
  const navigate = useNavigate();

  const handleSUbmit = () => {
    setTimeout(() => {
      toast({
        position: "top",
        title: "Order Placed",
        description: "Have a nice day !",
        status: "success",
        duration: 6000,
        isClosable: true,
      });
    });
    setTimeout(() => {
      toast({
        position: "top",
        title: "Order Dispatch",
        description: "Have a nice day !",
        status: "success",
        duration: 6000,
        isClosable: true,
      });
    }, 2000);
    setTimeout(() => {
      toast({
        position: "top",
        title: "Order Delivered ",
        description: "Have a nice day !",
        status: "success",
        duration: 6000,
        isClosable: true,
      });
    }, 5000);
    setTimeout(() => {
      navigate("/Shopping");
    }, 6000);
  };
  return (
    <>
      <h1 className="h1">Place Order</h1>
      <div className="FormDataisers">
        <div className="HOmies">
          {datParsed.map((item) => (
            <div className="kbds">
              <div className="FirstLast">
                <h1>Your Full Name : {item.firstname}</h1>
                <h1>{item.lastName}</h1>
              </div>
              <div>
                <h1>Your Address : {item.address}</h1>
                <div className="FirstLast">
                  Your city : {item.city} {" - "}
                  {item.state}
                </div>
                <h1 className="pincoe">PinCode Address : {item.pinCode}</h1>
                <h1 className="pincoe">Mobile No : {item.phone}</h1>
              </div>
              <Link to="/Checkout">
                <button className="BUTTONSDREDIT">Edit Adress</button>
              </Link>
            </div>
          ))}
        </div>
        <div className="ordrHst">
          <div onClick={handleSUbmit}>Place Order</div>
        </div>
      </div>
    </>
  );
};

export default Ordered;
