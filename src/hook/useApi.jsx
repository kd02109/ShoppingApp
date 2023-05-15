import { useQuery } from "@tanstack/react-query";
import getList from "../api/api";

export default function useApi() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getList,
  });
  let fetchData;
  if (!isLoading) {
    fetchData = data.map((item) => ({ ...item, bookmarked: false }));
  }
  return { data: fetchData, isError, isLoading };
}
