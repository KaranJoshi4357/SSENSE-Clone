import { Box, Flex, Image, Text, Tooltip } from "@chakra-ui/react";
import React from "react";

function SecCardComp({ src, alt, title, type }) {
  return (
    <Box boxSize={"400px"} height="fit-content">
      <Image src={src} alt={title} />

      <Flex justifyContent="flex-start" alignItems="center" mb="20px" p={2}>
        <Text textTransform="uppercase" color={"gray.600"}>
          RECENT
        </Text>
        <Box ml="20px">
          <Text
            fontSize={"1.15rem "}
            fontWeight="400"
            textTransform="uppercase"
          >
            {title}
          </Text>
          <Text fontSize={"sm"}>{type} | Jul | 13</Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default SecCardComp;
