import styled from "styled-components";
import FilterList from "../components/FilterList";
import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";

const Main = styled.main`
  margin-top: 104px;
  margin-left: ${(props) => props.theme.outerMargin};
  margin-right: ${(props) => props.theme.outerMargin};
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

function ProductLists({ handleClick, setToast, setToastBookmark }) {
  const [numState, setNumState] = useState(0);
  const state = useSelector((state) => state.bookmark);
  console.log(state);

  return (
    <Main onClick={handleClick}>
      <Container>
        <FilterList numState={numState} setNumState={setNumState} />
      </Container>
      <section>
        <List>
          {numState === 0 &&
            state.map((item) => (
              <li key={item.id}>
                <Card
                  data={item}
                  setToast={setToast}
                  setToastBookmark={setToastBookmark}
                />
              </li>
            ))}
          {numState === 1 &&
            state
              .filter((item) => item.type === "Product")
              .map((item) => (
                <li key={item.id}>
                  <Card
                    data={item}
                    setToast={setToast}
                    setToastBookmark={setToastBookmark}
                  />
                </li>
              ))}
          {numState === 2 &&
            state
              .filter((item) => item.type === "Category")
              .map((item) => (
                <li key={item.id}>
                  <Card
                    data={item}
                    setToast={setToast}
                    setToastBookmark={setToastBookmark}
                  />
                </li>
              ))}
          {numState === 3 &&
            state
              .filter((item) => item.type === "Exhibition")
              .map((item) => (
                <li key={item.id}>
                  <Card
                    data={item}
                    setToast={setToast}
                    setToastBookmark={setToastBookmark}
                  />
                </li>
              ))}
          {numState === 4 &&
            state
              .filter((item) => item.type === "Brand")
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
    </Main>
  );
}

export default ProductLists;
