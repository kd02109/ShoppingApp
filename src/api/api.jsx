import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

export const queryClient = new QueryClient();

const getList = () =>
  axios
    .get("http://cozshopping.codestates-seb.link/api/v1/products")
    .then((res) => res.data);
export default getList;
