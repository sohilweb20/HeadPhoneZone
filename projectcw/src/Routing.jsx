import { Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Shopping from "./Pages/Shopping/Shipping";
import ShoppingSinglePage from "./Pages/SinglePage/ShoppingSinglePage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/Shopping" element={<Shopping />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Headphone/:_id" element={<ShoppingSinglePage />} />
    </Routes>
  );
};

export default Routing;
