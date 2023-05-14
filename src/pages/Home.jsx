import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useQuery } from "@tanstack/react-query";
import getList from "../api/api";
import Loading from "../components/Loading";
import styled from "styled-components";
import randomNum from "../util/randomnum";
import Card from "../components/Card";
import useHeaderClick from "../hook/useHeaderClick";

const Main = styled.main`
  margin-top: 104px;
  margin-left: ${(props) => props.theme.outerMargin};
  margin-right: ${(props) => props.theme.outerMargin};
`;
const Title = styled.h2`
  font-size: ${(props) => props.theme.font.medium};
  font-weight: 600;
`;

const List = styled.ul`
  display: flex;
  gap: 24px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

function Home() {
  const { click, setClick, handleClick } = useHeaderClick();

  // 보여줄 상품 리스트 랜덤으로 선정
  const [number, setNumber] = useState("");
  // 화면 변경 표시 제거
  const [loading, setLoading] = useState(true);

  const { data, isError, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getList,
  });
  if (!isLoading) {
    //reducer 패치 시작하기 data에 bookmark 추가하기
  }
  useEffect(() => {
    setNumber(randomNum());
    setLoading(false);
  }, []);
  return (
    <>
      <Header click={click} setClick={setClick} handleClick={handleClick} />
      <Main onClick={handleClick}>
        {isLoading && <Loading />}
        {!isLoading && !loading && (
          <>
            <Title>상품 리스트</Title>
            <List>
              {data.slice(number, number + 4).map((item) => (
                <li key={item.id}>
                  <Card data={item} />
                </li>
              ))}
            </List>
            <Title>북마크 리스트</Title>
          </>
        )}
      </Main>
      <Footer handleClick={handleClick} />
    </>
  );
}

export default Home;
