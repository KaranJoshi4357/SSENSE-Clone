import { Flex, Spacer, Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/navlogo.svg";
import navLogo from "../images/SSENSE.png";
const wearMenu = [
  {
    to: "/mens",
    title: "MENSWEAR",
  },
  {
    to: "/womens",
    title: "WOMENSWEAR",
  },
  {
    to: "/every",
    title: " EVERYTHING ELSE",
  },
  {
    to: "/sale",
    title: "SALE",
  },
];

const loginMenu = [
  {
    title: "English",
  },
  {
    to: "/login",
    title: "Login",
  },
  {
    to: "/wishlist",
    title: "wishlist",
  },
  {
    to: "/shopping bag",
    title: "shopping bag",
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
          {wearMenu.map((item) => {
            return (
              <div>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
                  className="navFont"
                  key={item.title}
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
        <Link to="/">
          <Text
            style={{ paddingRight: "130px" }}
            fontSize="2xl"
            fontWeight="600"
          >
            SSENSE
          </Text>
        </Link>
      </Box>
      {/* <Spacer /> */}
      <Box>
        <Flex gap={5}>
          {loginMenu.map((item) => (
            <NavLink
              className="navFont"
              key={item.title}
              to={item.to || item.title}
            >
              {item.title}
            </NavLink>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
}

export default Navbar;
