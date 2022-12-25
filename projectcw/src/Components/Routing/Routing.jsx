import { Route, Routes } from "react-router-dom";
import Cart from "../../Pages/Cart";
import Home from "../../Pages/Home";
import Login from "../Login/index";
import Signup from "../Signup/index";
import Shopping from "../../Pages/Shopping/Shipping";
import ShoppingSinglePage from "../SinglePage/ShoppingSinglePage";
import Search from "../../Pages/Search/Search";

const Routing = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/Shopping" element={<Shopping />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Headphone/:_id" element={<ShoppingSinglePage />} />
      <Route path="/Search" element={<Search />} />
    </Routes>
  );
};

export default Routing;
