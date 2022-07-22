import { Box, Flex, Grid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Category, { AllCategories, SortBy } from "./Category";
import { getMenProduct } from "./productApi";
import ProductCard from "./ProductCard";

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
              <ProductCard
                src={item.img_url}
                title={item.name}
                price={item.price}
              />
            ))}
          </Grid>
        </Box>
        <Box>
          <Box mb={5}>
            <SortBy />
          </Box>
          <Category />
        </Box>
      </Flex>
    </Box>
  );
}

export default Mens;
