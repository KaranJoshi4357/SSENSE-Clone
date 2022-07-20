import { Badge, Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

function ProductHomeAd({ src, text, btnText }) {
  return (
    <Box my={5} maxH={"full"}>
      <Image src={src} />
      <Flex mt={2} alignItems={"center"}>
        <Badge p={1} fontWeight={"normal"}>
          Featured
        </Badge>
        <Text ml={5} textTransform={"uppercase"} fontSize="2xl">
          {text}
        </Text>
      </Flex>
      <Button
        variant={"outline"}
        borderRadius={10}
        mt={3}
        textTransform={"uppercase"}
      >
        {btnText}
      </Button>
    </Box>
  );
}

export default ProductHomeAd;
