import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const navLink = [
  {
    to: "/",
    text: "COUNTRY/REGION: INDIA",
  },
  {
    to: "/news",
    text: "newsletter signup",
  },
  {
    to: "/cc",
    text: "customer care",
  },
  {
    to: "/location",
    text: "location",
  },
  {
    to: "/editorial",
    text: "Editorial Archive",
  },
  {
    to: "/carrer",
    text: "careers",
  },
  {
    to: "/affi",
    text: "affiliates",
  },
  {
    to: "/sitemap",
    text: "sitemap",
  },
];
const siteFooter = [
  {
    to: "/copy",
    text: "© 2022 ssense.com",
  },

  {
    to: "/tm",
    text: "Terms & Conditions",
  },
  {
    to: "/pp",
    text: "Privacy Policy",
  },
  {
    to: "/cookies",
    text: "Cookies",
  },
  {
    to: "/acc",
    text: "Accessibility",
  },
];
function Footer() {
  return (
    <Box>
      <Box>
        <Flex justifyContent={"center"}>
          {navLink.map((item) => (
            <Link className="footerLinks" key={item.to} to={item.to}>
              {item.text}
            </Link>
          ))}
          <Box>
            <Flex gap={4}>
              <FaFacebook cursor={"pointer"} />
              <FaTwitter cursor={"pointer"} />
              <FaInstagram cursor={"pointer"} />
              <FaYoutube cursor={"pointer"} />
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box>
        <Flex justifyContent={"center"} my={2}>
          {siteFooter.map(({ to, text }) => (
            <Link className="siteFooter" to={to} key={to}>
              {text}
            </Link>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}

export default Footer;
