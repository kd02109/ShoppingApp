import axios from "axios";

export interface APIData {
  id: number;
  type: string;
  title: string | null;
  sub_title: string | null;
  brand_name: string | null;
  price: string | null;
  discountPercentage: number | null;
  image_url: string | null;
  brand_image_url: string | null;
  follower: number | null;
  bookmarked?: boolean;
}

const getList = () =>
  axios
    .get<APIData>("http://cozshopping.codestates-seb.link/api/v1/products")
    .then((res) => res.data)
    .catch((err) => {
      if (axios.isAxiosError(err)) {
        console.log(err.response?.data);
      }
    });
export default getList;
