import React, { useEffect, useState } from "react";
import "./Checkout.css";
import { useDispatch, useSelector } from "react-redux";
import { addFormData } from "../../Redux/AppReducer/action";
import { useToast } from "@chakra-ui/react";
const Checkout = () => {
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const toast = useToast();
  const CartData = useSelector((state) => state.AppReducer.cart);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email,
      country,
      firstname,
      lastName,
      address,
      city,
      state,
      pinCode,
      phone,
    };
    dispatch(addFormData(payload));
    // alert("Data Posted");
    toast({
      position: "top",
      title: "Form data added Successfully",
      description: "Have a nice day !",
      status: "success",
      duration: 6000,
      isClosable: true,
    });

    // console.log(payload);
  };
  useEffect(() => {
    const count = CartData.reduce((a, b) => {
      return a + Number(b.Price);
    }, 0);
    setTotal(count);
  }, [CartData]);

  return (
    <div className="upper">
      <div className="given">
        <h1>Contact Information</h1>
        <input
          type={"text"}
          placeholder="Email "
          value={email}
          className="helloshgs"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="partes">
        <div className="checkouts">
          <h1 className="start">Shipping address</h1>
          <select
            className="countreis"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required={true}
          >
            <option value="Country /Region">Country /Region</option>
            <option value="India">India</option>
          </select>
          <div className="names">
            <input
              type="text"
              placeholder="First Name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <input
            className="countreis"
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <div className="thierds">
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
            <select
              className="selects"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            >
              <option>Select State</option>
              <option>Andaman & Nikobar</option>
              <option>Assam</option>
              <option>Delhi</option>
              <option>Gujarat</option>
              <option>Uttar Pradesh</option>
              <option>Madhya Pradesh</option>
              <option>Kerela</option>
              <option>Karnataka</option>
              <option>Orisa</option>
              <option>Rajasthan</option>
              <option>Bihar</option>
              <option>Jammu & Kashmir</option>
            </select>
            <input
              type="text"
              placeholder="Pin code"
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
              required
            />
          </div>
          <input
            className="countreis"
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <div className="names2">
            <input type="checkbox" />
            <p> Save this information for next time</p>
          </div>

          <div className="continue">
            <button onClick={handleSubmit}>Continue to payment method</button>
          </div>
        </div>
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
          <div className="TOTAl">
            <h1>Total: {total} Rs. </h1>
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
