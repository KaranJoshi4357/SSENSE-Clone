import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function SuccessMsg() {
  const [state, dispatch] = useContext(AuthContext);
  let navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: "LOGOUT_SUCCESS",
      });
      navigate("/");
    }, 5000);
  }, []);

  return (
    <Box display={"flex"} justifyContent={"center"} height={"80vh"}>
      <Box width={"400px"} height={"40vh"} my="12">
        <Alert
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Payment Done
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            Thanks for purchasing our products
          </AlertDescription>
        </Alert>
      </Box>
    </Box>
  );
}

export default SuccessMsg;
