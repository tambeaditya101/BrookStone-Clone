import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Massage from "../pages/Massage";
import Sleep from "../pages/Sleep";
import Wellness from "../pages/Wellness";
import Notfound from "../pages/Notfound";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import PrivateRoute from "../AllRoutes/PrivateRoute";
import SingleSleepPage from "../pages/SingleSleepPage";
import SingleMassagePage from "../pages/SingleMassagePage";
import SingleWellnessPage from "../pages/SingleWellnessPage";
import Admin from "../pages/Admin";
import Payment from "../pages/Payment";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/massage" element={<Massage />}></Route>
        <Route path="/wellness" element={<Wellness />}></Route>
        <Route path="/sleep" element={<Sleep />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/payment" element={<Payment />}></Route>

        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        ></Route>

        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/sleep/:id" element={<SingleSleepPage />}></Route>
        <Route path="/massage/:id" element={<SingleMassagePage />}></Route>
        <Route path="/wellness/:id" element={<SingleWellnessPage />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
