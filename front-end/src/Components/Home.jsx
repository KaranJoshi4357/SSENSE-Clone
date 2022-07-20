import { Box, Image, Flex, Badge, Text, Container } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";

import SecCardComp from "./HomeComponents/SecCardComp";
import ProductHomeAd from "./HomeComponents/ProductHomeAd";

function Home() {
  return (
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
            Philip-Daniel Ducasse Shoots Psychedelic Band Crumb in This Season’s
            Must-Have Collaboration
          </Text>
        </Box>
      </Flex>

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

      <Flex>
        <Text>Karan</Text>
        <ProductHomeAd></ProductHomeAd>
      </Flex>
    </Box>
  );
}

export default Home;
