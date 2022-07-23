import { Box, Flex, Grid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Category, { AllCategories, SortBy } from "./Category";
import { getWomenProduct, highToLowWomen, lowToHighWomen } from "./productApi";
import ProductCard from "./ProductCard";

function Womens() {
  const [data, setData] = useState([]);
  let params = useParams();
  console.log(params);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    getWomenProduct().then((res) => setData(res));
  };
  function handelSort() {
    console.log("clicked");
    return lowToHighWomen().then((res) => setData(res));
  }
  function highSort() {
    return highToLowWomen().then((res) => setData(res));
  }
  console.log(data);
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
              <Link to={`/product/${item.id}`}>
                <Box key={item.id}>
                  <ProductCard
                    src={item.img_url}
                    title={item.name}
                    price={item.price}
                  />
                </Box>
              </Link>
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

export default Womens;
