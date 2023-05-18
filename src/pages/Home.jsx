import Loading from "../components/Loading";
import styled from "styled-components";
import { useSelector } from "react-redux";
import getRandomForSlice from "../util/getRandomForSlice";
import { useState } from "react";
import useClick from "../hook/useClick";
import useApi from "../hook/useApi";
import CardList from "../components/CardList";

const Main = styled.main`
  margin-top: 24px;
  margin-left: ${(props) => props.theme.margin.spacing11};
  margin-right: ${(props) => props.theme.margin.spacing11};
`;

const CHOOSENUMBER = 4;
function Home() {
  const { isLoading } = useApi();

  const state = useSelector((state) => state.bookmark);
  const [randomNumber, setRandomNumber] = useState(
    getRandomForSlice(state, CHOOSENUMBER)
  );

  const { onClick } = useClick();

  return (
    <>
      <Main onClick={onClick}>
        {isLoading && <Loading />}
        {!isLoading && (
          <>
            <CardList
              title={"상품 리스트"}
              state={state.slice(randomNumber, randomNumber + CHOOSENUMBER)}
            />
            <CardList
              title={"북마크 리스트"}
              state={state.filter((item) => item.bookmarked).slice(0, 4)}
            />
          </>
        )}
      </Main>
    </>
  );
}

export default Home;
