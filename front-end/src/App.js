import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import AllRoutes from "./Router/AllRoutes";
import Navbar from "./Components/Navbar";
import { Container } from "@chakra-ui/react";

function App() {
  return (
    <Container>
      <AllRoutes />
      <Navbar />
    </Container>
  );
}

export default App;
