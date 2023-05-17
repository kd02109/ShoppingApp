import axios from "axios";

const getList = () =>
  axios
    .get("http://cozshopping.codestates-seb.link/api/v1/products")
    .then((res) => res.data);
export default getList;
