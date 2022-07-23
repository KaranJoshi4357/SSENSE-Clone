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

export function getProductById(id) {
  return axios
    .get(`https://ssense-server-001.herokuapp.com/products/${id}`)
    .then((res) => res.data);
}
export function lowToHigh() {
  return axios
    .get(
      `https://ssense-server-001.herokuapp.com/products?gender=men&_sort=price&_order=asc`
    )
    .then((res) => res.data);
}
export function highToLow() {
  return axios
    .get(
      `https://ssense-server-001.herokuapp.com/products?gender=men&_sort=price&_order=DESC`
    )
    .then((res) => res.data);
}

export function lowToHighWomen() {
  return axios
    .get(
      `https://ssense-server-001.herokuapp.com/products?gender=women&_sort=price&_order=asc`
    )
    .then((res) => res.data);
}
export function highToLowWomen() {
  return axios
    .get(
      `https://ssense-server-001.herokuapp.com/products?gender=women&_sort=price&_order=DESC`
    )
    .then((res) => res.data);
}
