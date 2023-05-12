import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useQuery } from "@tanstack/react-query";
import getList from "../api/api";
import Loading from "../components/Loading";

function Home() {
  const [click, setClick] = useState(false);
  const { data, isError, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getList,
  });
  if (!isLoading) {
    //reducer 패치 시작하기 data에 bookmark 추가하기
  }

  return (
    <>
      <Header setClick={setClick} click={click} />
      {isLoading && <Loading />}
      <Footer />
    </>
  );
}

export default Home;
