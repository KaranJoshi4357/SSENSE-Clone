import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { loginData } from "./loginApi";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
function Login() {
  const [data, setData] = useState([]);
  let navigate = useNavigate();
  const [email, setInput] = useState("");
  const [password, setPassword] = useState("");
  const handleInputChange = (e) => setInput(e.target.value);
  const handelPassword = (e) => setPassword(e.target.value);
  const [state, dispatch] = useContext(AuthContext);
  const toast = useToast();
  useEffect(() => {
    loginData().then((res) => setData(res));
  }, []);
  const handleLogin = () => {
    if (email === data[0].username && password === data[0].password) {
      dispatch({
        type: "LOGIN_SUCCESS",
      });
      navigate("/");
    } else {
      toast({
        title: "Invalid Credentials.",
        description: "Please Check E-Mail & Password",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box my={5}>
      <Flex
        direction={"column"}
        alignItems="flex-start"
        alignContent={"center"}
        flexWrap={"wrap"}
      >
        <Text
          mt={6}
          fontSize={"sm"}
          color="gray.500"
          textTransform={"uppercase"}
        >
          Log In Or Create Account
        </Text>
        <Box boxSize={"350px"} mb={20} textAlign="center" mt={4}>
          <FormControl isRequired>
            <FormLabel fontSize={"14px"}>Email address</FormLabel>
            <Input
              type="email"
              size={"sm"}
              focusBorderColor={"black"}
              value={email}
              onChange={handleInputChange}
              placeholder="testaccount@test.com"
            />
          </FormControl>
          <FormControl mt={2} isRequired>
            <FormLabel fontSize={"14px"}>Password</FormLabel>
            <Input
              type="password"
              size={"sm"}
              focusBorderColor={"black"}
              value={password}
              onChange={handelPassword}
              placeholder="test1234"
            />
          </FormControl>
          <FormControl>
            <Button
              my={4}
              width="100%"
              color={"white"}
              backgroundColor={"blackAlpha.800"}
              size={"md"}
              _hover={{ color: "white", backgroundColor: "black" }}
              onClick={handleLogin}
            >
              Continue
            </Button>
          </FormControl>
        </Box>
      </Flex>
    </Box>
  );
}

export default Login;
