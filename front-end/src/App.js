import "./App.css";

import AllRoutes from "./Router/AllRoutes";
import Navbar from "./Components/Navbar";
import { Container } from "@chakra-ui/react";
import Footer from "./Components/Footer";

function App() {
  return (
    <Container maxW="6xl" maxH="12xl">
      <Navbar />
      <AllRoutes />

      <Footer />
    </Container>
  );
}

export default App;
