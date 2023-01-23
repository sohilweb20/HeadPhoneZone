import React from "react";
import { useSelector } from "react-redux";

const Payment = () => {
  const Formdata = useSelector((state) => state.AppReducer.form);
  console.log("FormaData", Formdata);
  return <div>FORMDATA</div>;
};

export default Payment;
