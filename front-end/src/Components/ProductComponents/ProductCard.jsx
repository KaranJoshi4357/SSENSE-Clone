import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

function ProductCard({ src, title, price }) {
  return (
    <Box boxSize={"200px"} my={5} height={"full"}>
      <Box>
        <Image src={src} alt="img" boxSizing="content-box" />
        <Box my={5}>
          <Text fontSize={"14px"} my={2} fontWeight={400}>
            HUGO
          </Text>
          <Text fontSize={"12px"} textTransform={"capitalize"} my={1}>
            {title}
          </Text>
          <Text fontSize={"12px"}>$ {price}</Text>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductCard;
