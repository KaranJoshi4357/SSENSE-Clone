import {
  Box,
  Flex,
  VStack,
  Image,
  Text,
  HStack,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { delteProduct, getData } from "./cartApi";

function ShopingBag() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    handelData();
    setLoading(false);
  }, []);

  const handelData = () => {
    getData().then((res) => setData(res));
  };
  const price = data.reduce((acc, item) => acc + Number(item.price), 0);

  const deleteOneProduct = (id) => {
    delteProduct(id).then((res) => handelData());
  };
  let navigate = useNavigate();
  const handlePayment = () => {
    navigate("/checkout");
  };
  return (
    <Box my={10}>
      <Flex direction={"column"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          p={2}
          boxShadow="md"
          alignItems={"center"}
        >
          <Text>
            Total Items: <b>{data.length}</b>
          </Text>
          <Text>
            Total Price: <b> ${price}</b>{" "}
          </Text>
          <Button onClick={() => handlePayment()}>Check Out</Button>
        </Box>
        {data.map((item) => (
          <Box
            key={item.id}
            width={"100%"}
            mb={5}
            boxShadow={"lg"}
            p={2}
            fontFamily={"Favorit SSENSE Inter"}
          >
            <Flex justifyContent={"space-between"}>
              <Image height={"150px"} width={"100px"} src={item.img_url} />
              <VStack
                align={"flex-start"}
                alignItems={"center"}
                justifyContent="center"
              >
                <Text fontSize={"sm"} textTransform={"uppercase"}>
                  {item.name}{" "}
                </Text>
                <Text fontSize={"sm"}>
                  SSENSE Exclusive Black Printed Shirt
                </Text>
              </VStack>
              <VStack alignItems={"center"} justifyContent="center">
                <Text fontSize={"sm"}>$ {item.price}</Text>
                <br />
                <br />
                <Text
                  fontSize={"sm"}
                  borderBottom={"1px solid black"}
                  cursor={"pointer"}
                  onClick={() => deleteOneProduct(item.id)}
                >
                  Remove Item
                </Text>
              </VStack>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

export default ShopingBag;
