import "./App.css";

import AllRoutes from "./Router/AllRoutes";
import Navbar from "./Components/Navbar";
import { Container } from "@chakra-ui/react";

function App() {
  return (
    <Container maxW="6xl" maxH="12xl">
      <Navbar />
      <AllRoutes />
    </Container>
  );
}

export default App;
