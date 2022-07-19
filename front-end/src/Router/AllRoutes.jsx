import React from "react";
import { Routes, Route } from "react-router-dom";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={"Home"}></Route>
      <Route path="/about" element={"About"}></Route>
      <Route path="/contact" element={"Contact"}></Route>
    </Routes>
  );
}

export default AllRoutes;
