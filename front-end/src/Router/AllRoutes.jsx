import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";

const routeSet = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/mens",
    element: "About",
  },
  {
    path: "/womens",
    element: "Women",
  },
  {
    path: "/every",
    element: " EVERYTHING ELSE",
  },
  {
    path: "/sale",
    element: "Sale",
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
