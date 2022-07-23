import axios from "axios";

export function cartPostData({
  id,
  name,
  img_url,
  price,
  gender,
  category,
  qty,
}) {
  return axios({
    url: `https://ssense-server-001.herokuapp.com/cart`,
    method: "POST",
    data: { id, name, img_url, price, gender, category, qty },
  });
}

export function getData() {
  return axios
    .get(`https://ssense-server-001.herokuapp.com/cart`)
    .then((res) => res.data);
}

export function delteProduct(id) {
  console.log(id);
  return axios({
    url: `https://ssense-server-001.herokuapp.com/cart/${id}`,
    method: "DELETE",
  });
}
