import {
  Box,
  Image,
  Flex,
  Badge,
  Text,
  Container,
  Spacer,
  Button,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";
import img7 from "../images/img7.png";
import img8 from "../images/img8.png";
import img9 from "../images/img9.png";
import img10 from "../images/img10.png";

import shoe1 from "../images/addidas1.png";
import shoe2 from "../images/addidas2.png";
import y3m from "../images/Y-3MENS.png";
import y3w from "../images/Y-3WOMENS.png";

import SecCardComp from "./HomeComponents/SecCardComp";
import ProductHomeAd from "./HomeComponents/ProductHomeAd";
import Footer from "./Footer";
// import ProductHomeAd from "./HomeComponents/ProductHomeAd";

function Home() {
  return (
    <Box>
      <Box>
        <Flex gap="3rem" py={10}>
          <Box>
            <Image
              // maxW={200}
              src={img1}
              alt="img"
            />
            <Flex pt="2px" alignItems="center">
              <Badge px={2}>Fashion</Badge>
              <Text
                ml={3}
                fontSize="1.3875rem"
                fontFamily="Favorit SSENSE Inter1"
                fontWeight="100"
                letterSpacing="0.015625rem"
              >
                Test-Driving with Gogo Graham
              </Text>
            </Flex>
            <Text fontSize="1rem" fontWeight="400">
              In Conversation with Devan Díaz, the Designer Reflects on Clothing
              Too Personal to Be Couture
            </Text>
          </Box>
          <Box>
            <Image
              // maxW={200}
              src={img2}
              alt="img"
            />
            <Flex pt="2px" alignItems="center">
              <Badge px={2}>Fashion</Badge>
              <Text
                ml={3}
                fontSize="1.3875rem"
                fontFamily="Favorit SSENSE Inter1"
                fontWeight="100"
                letterSpacing="0.015625rem"
              >
                Quiet Exuberance: Wales Bonner Adidas
              </Text>
            </Flex>
            <Text fontSize="1rem" fontWeight="400">
              Philip-Daniel Ducasse Shoots Psychedelic Band Crumb in This
              Season’s Must-Have Collaboration
            </Text>
          </Box>
        </Flex>
      </Box>

      <Box>
        <Flex gap={10}>
          <SecCardComp
            src={img3}
            title="(Fashion) Industry Plants"
            type="Market"
          />
          <SecCardComp
            src={img4}
            title="Nicholas Daley Is Good For The Plot"
            type="Fashion"
          />
          <SecCardComp
            src={img5}
            title="Sky High Farm to Table (and T-Shirt)"
            type="Fashion"
          />
        </Flex>
      </Box>
      <Box>
        <Flex gap={"3.5rem"}>
          <ProductHomeAd
            src={shoe1}
            text={"adidas orignal"}
            btnText={"SHOP MENSWEAR "}
          />

          <ProductHomeAd
            src={shoe2}
            text={"adidas orignal"}
            btnText={"SHOP WOMENSWEAR "}
          />
        </Flex>
      </Box>
      <Box>
        <Flex gap={"3.5rem"}>
          <ProductHomeAd
            src={img6}
            text={"ss daley"}
            btnText={"shop menswear"}
          />
          <ProductHomeAd
            src={img7}
            text={"bottega veneta"}
            btnText={"shop womenswear"}
          />
        </Flex>
      </Box>
      <Box borderBottom={"1px solid grey"} mb={10} pb={2}>
        <Text
          borderTop={"1px solid grey"}
          fontSize={"4.453125rem"}
          textAlign="center"
          fontFamily={"Favorit SSENSE Inter1"}
          textTransform={"uppercase"}
          margin={"0 1.875rem 1.875rem 1.875rem"}
        >
          Made in Vain: A Taxonomy of Eye-Opening Beauty Design
        </Text>
        <Text
          textAlign={"center"}
          margin={"1.875rem 1.875rem 1.25rem 1.875rem"}
          fontSize={"3.28125rem"}
        >
          From Falsies to Full-Coverage Enhancers, These Products Live Beyond
          Their Application
        </Text>
        <Box textAlign={"center"}>
          <Button verticalAlign={"center"} variant={"outline"}>
            VIEW EDITORIAL
          </Button>
        </Box>
      </Box>
      <Box>
        <Flex gap={5}>
          <SecCardComp
            src={img10}
            title={"Finding the Last Love Hotel"}
            type={"Culture"}
          />
          <SecCardComp
            src={img8}
            title={"You’ve Got the Look"}
            type={"Fashion"}
          />
          <SecCardComp
            src={img9}
            title={"EVERYTHING ELSE™ Launches Cycling"}
            type={"Market"}
          />
        </Flex>
      </Box>

      <Box>
        <Flex gap={"3.5rem"}>
          <ProductHomeAd src={y3m} text={"Y-3"} btnText={"shop menswear"} />
          <ProductHomeAd src={y3w} text={"y-3"} btnText={"shop womenswear"} />
        </Flex>
      </Box>
      {/* <Box textAlign={"center"} m={5}>
        <Footer />
      </Box> */}
    </Box>
  );
}

export default Home;
