import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { lowToHigh } from "./productApi";
function Category() {
  return (
    <Box boxSize={"200px"}>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box fontSize={"16px"} flex="1" textAlign="left">
                COLORS
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel fontSize={"14px"} pb={4}>
            ALL COLORS
          </AccordionPanel>
          <AccordionPanel pb={4}>Black</AccordionPanel>
          <AccordionPanel pb={4}>Red</AccordionPanel>
          <AccordionPanel pb={4}>Yellow</AccordionPanel>
          <AccordionPanel pb={4}>Blue</AccordionPanel>
          <AccordionPanel pb={4}>Orange</AccordionPanel>
          <AccordionPanel pb={4}>Saffron</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}

export function AllCategories() {
  return (
    <Box>
      <Text mb={2} fontSize={"14px"} textTransform={"uppercase"}>
        All Categories
      </Text>
      <Link style={{ fontSize: "12px" }} to="/">
        ACCESSORIES
      </Link>
      <Text mb={1} fontSize={"12px"}>
        BAGS
      </Text>
      <Text mb={1} fontSize={"12px"}>
        CLOTHING
      </Text>
      <Text mb={1} fontSize={"12px"}>
        SHOES
      </Text>
    </Box>
  );
}

export function SortBy() {
  return (
    <Box>
      <Text fontSize={"14px"}>SORT</Text>
      <Flex direction={"column"}>
        <Link to="" fontSize={"12px"}>
          Latest Arrivals
        </Link>
        <Link to="" fontSize={"12px"}>
          Trending
        </Link>
      </Flex>
    </Box>
  );
}
export default Category;
