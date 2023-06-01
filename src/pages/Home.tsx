import Loading from "../components/Loading";
import styled from "styled-components";
import { useSelector } from "react-redux";
import getRandomForSlice from "../util/getRandomForSlice";
import { useState } from "react";
import useClick from "../hook/useClick";
import useApi from "../hook/useApi";
import CardList from "../components/CardList";
import { RootState } from "../redux/reducer/store";

const Main = styled.main`
  margin-top: 24px;
  margin-left: ${(props) => props.theme.margin.spacing11};
  margin-right: ${(props) => props.theme.margin.spacing11};
`;

const CHOOSENUMBER = 4;
function Home() {
  const { isLoading } = useApi();

  const state = useSelector<RootState, RootState["bookmark"]>(
    (state) => state.bookmark
  );
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
              state={
                Array.isArray(state)
                  ? state.slice(randomNumber, randomNumber + CHOOSENUMBER)
                  : null
              }
            />
            <CardList
              title={"북마크 리스트"}
              state={
                Array.isArray(state)
                  ? state
                      .filter((item) => item.bookmarked)
                      .slice(0, CHOOSENUMBER)
                  : null
              }
            />
          </>
        )}
      </Main>
    </>
  );
}

export default Home;
