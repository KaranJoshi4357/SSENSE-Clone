import React from "react";
import { Routes, Route } from "react-router-dom";

import ShopingBag from "../Components/CartComponents/ShopingBag";
import CheckOut from "../Components/CheckOut";

import Home from "../Components/Home";
import Login from "../Components/LoginComponent/Login";
import Payment from "../Components/Payment";
import PrivateRoute from "../Components/PrivateRoute";
import Mens from "../Components/ProductComponents/Mens";
import ShowFullProd from "../Components/ProductComponents/ShowFullProd";
import Womens from "../Components/ProductComponents/Women";
import SuccessMsg from "../Components/SuccessMsg";
import UnderBuild from "../Components/UnderBuild";

const routeSet = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/mens",
    element: (
      <PrivateRoute>
        {" "}
        <Mens />{" "}
      </PrivateRoute>
    ),
  },
  {
    path: "/womens",
    element: (
      <PrivateRoute>
        <Womens />
      </PrivateRoute>
    ),
  },
  {
    path: "/every",
    element: <UnderBuild />,
  },
  {
    path: "/sale",
    element: <UnderBuild />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/shoping-bag",

    element: (
      <PrivateRoute>
        <ShopingBag />
      </PrivateRoute>
    ),
  },
  {
    path: "/checkout",
    element: (
      <PrivateRoute>
        <CheckOut />
      </PrivateRoute>
    ),
  },
  {
    path: "/product/:product_id",

    element: (
      <PrivateRoute>
        <ShowFullProd />
      </PrivateRoute>
    ),
  },
  {
    path: "/payment",

    element: (
      <PrivateRoute>
        <Payment />
      </PrivateRoute>
    ),
  },
  {
    path: "success",
    element: (
      <PrivateRoute>
        <SuccessMsg />
      </PrivateRoute>
    ),
  },
  {
    path: "wishlist",
    element: <UnderBuild />,
  },
];

function AllRoutes() {
  return (
    <Routes>
      {routeSet.map((item) => (
        <Route
          key={item.element}
          path={item.path}
          element={item.element}
        ></Route>
      ))}
    </Routes>
  );
}

export default AllRoutes;
