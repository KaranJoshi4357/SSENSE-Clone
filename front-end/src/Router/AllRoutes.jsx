import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Components/LoginComponent/Login";
import PrivateRoute from "../Components/PrivateRoute";

const routeSet = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/mens",
    element: <PrivateRoute>"About"</PrivateRoute>,
  },
  {
    path: "/womens",
    element: <PrivateRoute>"Womens"</PrivateRoute>,
  },
  {
    path: "/every",
    element: " EVERYTHING ELSE",
  },
  {
    path: "/sale",
    element: "Sale",
  },
  {
    path: "/login",
    element: <Login />,
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
