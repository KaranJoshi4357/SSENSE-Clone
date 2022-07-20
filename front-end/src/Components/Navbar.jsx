import { Flex, Spacer, Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/navlogo.svg";
import navLogo from "../images/SSENSE.png";
const wearMenu = [
  {
    to: "/mens",
    title: "MENSWEAR",
    id: 1,
  },
  {
    to: "/womens",
    title: "WOMENSWEAR",
    id: 2,
  },
  {
    to: "/every",
    title: " EVERYTHING ELSE",
    id: 3,
  },
  {
    to: "/sale",
    title: "SALE",
    id: 4,
  },
];

const loginMenu = [
  {
    title: "English",
    id: 5,
  },
  {
    to: "/login",
    title: "Login",
    id: 6,
  },
  {
    to: "/wishlist",
    title: "wishlist",
    id: 7,
  },
  {
    to: "/shopping bag",
    title: "shopping bag",
    id: 8,
  },
];
const baseStyle = {
  color: "black",
  borderBottom: "none",
};
const activeStyle = {
  color: "gray",
  borderBottom: "1px solid black",
};
function Navbar() {
  return (
    <Flex
      // position={"fixed"}
      py={1}
      alignItems="center"
      justifyContent="space-between"
    >
      <Box>
        <Flex gap={5}>
          {wearMenu.map((item, index) => {
            return (
              <div>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
                  className="navFont"
                  key={index}
                  to={item.to}
                >
                  {item.title}
                </NavLink>
              </div>
            );
          })}
          <Box>Search</Box>
        </Flex>
      </Box>
      {/* <Spacer /> */}
      <Box>
        <NavLink to="/">
          <Text
            style={{ paddingRight: "130px" }}
            fontSize="2xl"
            fontWeight="600"
            key={1000}
          >
            SSENSE
          </Text>
        </NavLink>
      </Box>
      {/* <Spacer /> */}
      <Box>
        <Flex gap={5}>
          {loginMenu.map((item, index) => (
            <NavLink className="navFont" key={index} to={item.to || item.title}>
              {item.title}
            </NavLink>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
}

export default Navbar;
