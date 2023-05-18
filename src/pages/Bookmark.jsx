import styled from "styled-components";
import FilterList from "../components/FilterList";
import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import useClick from "../hook/useClick";

const Main = styled.main`
  margin-top: 24px;
  margin-left: ${(props) => props.theme.margin.spacing11};
  margin-right: ${(props) => props.theme.margin.spacing11};
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 26.5px;
`;
const List = styled.ul`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;

function Bookmark() {
  const [numState, setNumState] = useState(0);
  const state = useSelector((state) => state.bookmark);
  const { onClick } = useClick();
  return (
    <Main onClick={onClick}>
      <Container>
        <FilterList numState={numState} setNumState={setNumState} />
      </Container>
      <section>
        <List>
          {numState === 0 &&
            state
              .filter((item) => item.bookmarked)
              .map((item) => (
                <li key={item.id}>
                  <Card data={item} />
                </li>
              ))}
          {numState === 1 &&
            state
              .filter((item) => item.type === "Product" && item.bookmarked)
              .map((item) => (
                <li key={item.id}>
                  <Card data={item} />
                </li>
              ))}
          {numState === 2 &&
            state
              .filter((item) => item.type === "Category" && item.bookmarked)
              .map((item) => (
                <li key={item.id}>
                  <Card data={item} />
                </li>
              ))}
          {numState === 3 &&
            state
              .filter((item) => item.type === "Exhibition" && item.bookmarked)
              .map((item) => (
                <li key={item.id}>
                  <Card data={item} />
                </li>
              ))}
          {numState === 4 &&
            state
              .filter((item) => item.type === "Brand" && item.bookmarked)
              .map((item) => (
                <li key={item.id}>
                  <Card data={item} />
                </li>
              ))}
        </List>
      </section>
    </Main>
  );
}

export default Bookmark;
