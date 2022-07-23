import { Box, Image } from "@chakra-ui/react";
import React from "react";
import underCon from "../images/underCon.jpg";
function UnderBuild() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      height={"80vh"}
      alignItems={"center"}
    >
      <Image src={underCon} maxBlockSize={"300px"} />
    </Box>
  );
}

export default UnderBuild;
