import { useQuery } from "@tanstack/react-query";

import getList, { APIData } from "../api/api";

export default function useApi() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getList,
    retry: 2,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    staleTime: 60000,
    cacheTime: 60000,
  });
  let fetchData: APIData[] | undefined;
  if (!isLoading && Array.isArray(data)) {
    fetchData = data.map((item: APIData) => ({ ...item, bookmarked: false }));
  }
  return { data: fetchData, isError, isLoading };
}
