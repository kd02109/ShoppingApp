import Loading from "../components/Loading";
import styled from "styled-components";
import Card from "../components/Card";
import { useSelector } from "react-redux";
import getRandomForSlice from "../util/getRandomForSlice";
import { useState } from "react";
import useClick from "../hook/useClick";
import useApi from "../hook/useApi";

const Main = styled.main`
  margin-top: 104px;
  margin-left: ${(props) => props.theme.margin.spacing11};
  margin-right: ${(props) => props.theme.margin.spacing11};
`;
const Title = styled.h2`
  font-size: ${(props) => props.theme.font.medium};
  font-weight: 600;
`;

const List = styled.ul`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;

const CHOOSENUMBER = 4;
function Home({ setToast, setToastBookmark }) {
  const { isLoading } = useApi();

  const state = useSelector((state) => state.bookmark);
  const [randomNumber, setrandomNumber] = useState(
    getRandomForSlice(state, CHOOSENUMBER)
  );

  const { onClick } = useClick();

  return (
    <>
      <Main onClick={onClick}>
        {isLoading && <Loading />}
        {!isLoading && (
          <>
            <section>
              <Title>상품 리스트</Title>
              <List>
                {state
                  .slice(randomNumber, randomNumber + CHOOSENUMBER)
                  .map((item) => (
                    <li key={item.id}>
                      <Card
                        data={item}
                        setToast={setToast}
                        setToastBookmark={setToastBookmark}
                      />
                    </li>
                  ))}
              </List>
            </section>
            <section>
              <Title>북마크 리스트</Title>
              <List>
                {state
                  .filter((item) => item.bookmarked)
                  .slice(0, 4)
                  .map((item) => (
                    <li key={item.id}>
                      <Card
                        data={item}
                        setToast={setToast}
                        setToastBookmark={setToastBookmark}
                      />
                    </li>
                  ))}
              </List>
            </section>
          </>
        )}
      </Main>
    </>
  );
}

export default Home;
