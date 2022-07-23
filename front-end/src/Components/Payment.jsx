import {
  Text,
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getData } from "./CartComponents/cartApi";

function Payment() {
  let navigate = useNavigate();

  const SuccessMsg = () => {
    return navigate("/success"), { replace: true };
  };

  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Box
        mt={10}
        mb={20}
        boxSize={"400px"}
        boxShadow={"lg"}
        textAlign={"center"}
        p={5}
        height="60vh"
        borderRadius={"2xl"}
      >
        <Flex>
          <FormControl>
            <FormLabel>Card Number</FormLabel>
            <Input type={"number"} placeholder="1234 4567 8901 1234" required />
          </FormControl>
        </Flex>
        <Flex my={4} gap={10}>
          <FormControl>
            <FormLabel>MM/YY</FormLabel>
            <Input type={"number"} placeholder="12/12" required />
          </FormControl>
          <FormControl>
            <FormLabel>CVV</FormLabel>
            <Input type={"number"} placeholder="CVV" required />
          </FormControl>
        </Flex>
        <Flex>
          <FormControl>
            <FormLabel>Card Holder Name</FormLabel>
            <Input type={"text"} placeholder="John Doe" required />
          </FormControl>
        </Flex>
        <FormControl>{/* <Text>Total Payment:0</Text> */}</FormControl>
        <FormControl mt={4}>
          <Button colorScheme={"orange"} onClick={() => SuccessMsg()}>
            Submit
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
}

export default Payment;
