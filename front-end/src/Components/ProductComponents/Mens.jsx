import { Box, Flex, Grid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Category, { AllCategories, SortBy } from "./Category";
import { getMenProduct, lowToHigh, highToLow } from "./productApi";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

function Mens() {
  const [data, setData] = useState([]);
  let params = useParams();
  console.log(params);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    getMenProduct().then((res) => setData(res));
  };
  function handelSort() {
    console.log("clicked");
    return lowToHigh().then((res) => setData(res));
  }
  function highSort() {
    return highToLow().then((res) => setData(res));
  }
  return (
    <Box mt={10}>
      <Flex justifyContent={"space-between"}>
        <Box>
          <AllCategories />
        </Box>
        <Box>
          <Grid
            templateColumns={"repeat(3,1fr)"}
            gap={6}
            alignContent={"center"}
          >
            {data.map((item) => (
              <Box key={item.id}>
                <Link to={`/product/${item.id}`}>
                  <ProductCard
                    src={item.img_url}
                    title={item.name}
                    price={item.price}
                  />
                </Link>
              </Box>
            ))}
          </Grid>
        </Box>
        <Box>
          <Box mb={5}>
            <SortBy />
            <Box
              fontSize={"13px"}
              cursor={"pointer"}
              onClick={() => handelSort()}
            >
              Price: Low to High
            </Box>
            <Box
              fontSize={"13px"}
              cursor={"pointer"}
              onClick={() => highSort()}
            >
              Price: High to Low
            </Box>
          </Box>
          <Category />
        </Box>
      </Flex>
    </Box>
  );
}

export default Mens;
