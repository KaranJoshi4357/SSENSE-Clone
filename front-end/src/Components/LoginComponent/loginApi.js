import axios from "axios";
export const loginData = () => {
  return axios
    .get(`https://ssense-server-001.herokuapp.com/userlogin`)
    .then((res) => res.data);
};
