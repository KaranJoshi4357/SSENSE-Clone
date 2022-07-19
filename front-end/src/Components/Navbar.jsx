import { Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const wearMenu = [
  {
    to: "/menswear",
    title: "MENSWEAR",
  },
  {
    to: "womenswear",
    title: "WOMENSWEAR",
  },
  {
    to: "everything-else",
    title: " EVERYTHING ELSE",
  },
  {
    to: "sale",
    title: "SALE",
  },
];

function Navbar() {
  return (
    <Flex gap={2} justifyContent="flex-start">
      {wearMenu.map((item) => {
        return (
          <NavLink key={item.title} to={item.to}>
            {item.title}
          </NavLink>
        );
      })}
      <Spacer />
      {wearMenu.map((item) => {
        return (
          <NavLink key={item.title} to={item.to}>
            {item.title}
          </NavLink>
        );
      })}
    </Flex>
  );
}

export default Navbar;
