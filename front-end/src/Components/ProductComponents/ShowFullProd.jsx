import {
  Box,
  Button,
  Flex,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "./productApi";
import { FaRegHeart } from "react-icons/fa";
import { cartPostData, getData } from "../CartComponents/cartApi";

function ShowFullProd() {
  let params = useParams();
  let [data, setData] = useState([]);
  useEffect(() => {
    getProductById(params.product_id).then((res) => setData(res));
  }, []);

  const { id, name, img_url, price, gender, category } = data;
  const qty = 1;
  const addDataCart = (id, name, img_url, price, gender, category, qty) => {
    cartPostData({
      id,
      name,
      img_url,
      price,
      gender,
      category,
      qty,
    });
  };

  return (
    <Box fontFamily={"Favorit SSENSE Inter"}>
      <SimpleGrid
        column={{ base: 1, lg: 2 }}
        spacing={{ base: 8, lg: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Box maxWidth={"200px"}>
            <Text>HUGO</Text>
            <Text fontSize={"sm"} textTransform={"uppercase"}>
              {" "}
              {data.name}{" "}
            </Text>
            <br></br>
            <VStack>
              <Text fontSize={"md"}>Organic cotton twill shirt.</Text>
              <br />
              <Text fontSize={"sm"}>
                · Spread collar
                <br />· Button closure
                <br />· Flap pockets <br />· Seam pockets
                <br /> · Textile logo patch at front <br />· Two-button barrel
                cuffs
              </Text>
              <br />
              <Text>Supplier color: Light pastel green</Text>
              <br />
              <Text>100% organic cotton. Imported.</Text>
            </VStack>
          </Box>
          <Box>
            <Image
              rounded={"md"}
              src={data.img_url}
              // fit={"cover"}
              align={"Center"}
              // w={"100%"}
              alt={data.name}
              h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
          </Box>
          <Box maxW={"200px"}>
            <Text fontSize={"md"} fontWeight={"bold"}>
              Price: ${data.price}
            </Text>
            <br />
            <Flex gap={2}>
              <Button
                p={4}
                colorScheme={"teal"}
                onClick={() =>
                  addDataCart(id, name, img_url, price, gender, category, qty)
                }
              >
                Add To Bag
              </Button>
              <Button p={4} colorScheme={"blackAlpha"}>
                <Flex gap={2} alignItems={"center"}>
                  <FaRegHeart /> Wishlist
                </Flex>
              </Button>
            </Flex>
          </Box>
        </Flex>
      </SimpleGrid>
    </Box>
  );
}

export default ShowFullProd;
