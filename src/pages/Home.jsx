import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import styled from "styled-components";
import Card from "../components/Card";
import { useSelector } from "react-redux";

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

function Home({ handleClick, isLoading }) {
  // 화면 변경 표시 제거
  const state = useSelector((state) => state.bookmark.data);

  return (
    <>
      <Main onClick={handleClick}>
        {isLoading && <Loading />}
        {!isLoading && (
          <>
            <section>
              <Title>상품 리스트</Title>
              <List>
                {state.slice(0, 4).map((item) => (
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
