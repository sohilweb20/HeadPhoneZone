import { Route, Routes } from "react-router-dom";
import Cart from "../../Pages/Cart";
import Home from "../../Pages/Home";
import Login from "../Login/index";
import Signup from "../Signup/index";
import Shopping from "../../Pages/Shopping/Shipping";
import ShoppingSinglePage from "../SinglePage/ShoppingSinglePage";
import Search from "../../Pages/Search/Search";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const Routing = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      />
      <Route path="/Shopping" element={<Shopping />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Headphone/:id" element={<ShoppingSinglePage />} />
      <Route
        path="/Search"
        element={
          <PrivateRoute>
            <Search />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default Routing;
