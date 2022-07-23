import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CheckOut() {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/payment");
  };
  return (
    <Box display={"flex"} justifyContent={"center"} my={10}>
      <Box
        boxSize={"550px"}
        boxShadow={"lg"}
        textAlign={"center"}
        p={5}
        height="full"
        borderRadius={"2xl"}
      >
        <Flex gap={10}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input onChange={handleChange} type="text" name="firstname" />
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input onChange={handleChange} type="text" name="lastname" />
          </FormControl>
        </Flex>
        <Flex gap={10} marginTop={4}>
          <FormControl>
            <FormLabel>Street Address</FormLabel>
            <Input onChange={handleChange} type="text" name="street-address" />
          </FormControl>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input onChange={handleChange} type="text" name="city" />
          </FormControl>
        </Flex>
        <Flex gap={10} my={4}>
          <FormControl>
            <FormLabel>Zip Code(Pin Code)</FormLabel>
            <Input onChange={handleChange} type="number" name="pincode" />
          </FormControl>
          <FormControl>
            <FormLabel>State</FormLabel>
            <Input onChange={handleChange} type="text" name="state" />
          </FormControl>
        </Flex>
        <FormControl>
          <FormLabel>Phone Number</FormLabel>
          <Input onChange={handleChange} type="number" name="phonenNo" />
        </FormControl>
        <FormControl my={4}>
          <Button onClick={handleSubmit} colorScheme={"cyan"}>
            Submit
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
}

export default CheckOut;
