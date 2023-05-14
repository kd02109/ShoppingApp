import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import styled from "styled-components";
import randomNum from "../util/randomnum";
import Card from "../components/Card";

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

function Home({ handleClick, data, isLoading }) {
  // 보여줄 상품 리스트 랜덤으로 선정
  const [number, setNumber] = useState("");
  // 화면 변경 표시 제거
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setNumber(randomNum());
    setLoading(false);
  }, []);
  return (
    <>
      <Main onClick={handleClick}>
        {isLoading && <Loading />}
        {!isLoading && !loading && (
          <>
            <section>
              <Title>상품 리스트</Title>
              <List>
                {data.slice(number, number + 4).map((item) => (
                  <li key={item.id}>
                    <Card data={item} />
                  </li>
                ))}
              </List>
            </section>
            <section>
              <Title>북마크 리스트</Title>
            </section>
          </>
        )}
      </Main>
    </>
  );
}

export default Home;
