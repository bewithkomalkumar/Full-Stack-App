import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import PrivateRouter from "../Componet/Navbar/PrivateRouter/PrivateRouter";
import Home from "../Pages/Home";
import Cycles from "../Pages/Cycles";
import JustLaunched from "../Pages/JustLaunched";
import TradeMills from "../Pages/TradeMills";
import SpinBikes from "../Pages/SpinBikes";
import Cart from "../Pages/Cart";
import ProductDetails from "../Pages/ProductDetails";
function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={
            <PrivateRouter>
              <Register />
            </PrivateRouter>
          }
        />
        <Route
          path="/login"
          element={
            <PrivateRouter>
              <Login />
            </PrivateRouter>
          }
        />

        <Route path="/cycles" element={<Cycles />} />
        <Route path={"/Just_Launched"} element={<JustLaunched />} />
        <Route path={"/trademills"} element={<TradeMills />} />
        <Route path="spinbikes" element={<SpinBikes />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default Allroutes;
