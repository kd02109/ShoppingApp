import { useQuery } from "@tanstack/react-query";
import getList, { APIData } from "../api/api";

export default function useApi() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getList,
  });
  let fetchData: APIData[] | undefined;
  if (!isLoading && Array.isArray(data)) {
    fetchData = data.map((item: APIData) => ({ ...item, bookmarked: false }));
  }
  return { data: fetchData, isError, isLoading };
}
