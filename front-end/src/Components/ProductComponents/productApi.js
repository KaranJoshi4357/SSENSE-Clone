import axios from "axios";
export function getMenProduct() {
  return axios
    .get(`https://ssense-server-001.herokuapp.com/products?gender=men`)
    .then((res) => res.data);
}

export function getWomenProduct() {
  return axios
    .get(`https://ssense-server-001.herokuapp.com/products?gender=women`)
    .then((res) => res.data);
}
