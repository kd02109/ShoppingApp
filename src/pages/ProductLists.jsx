import styled from "styled-components";
import FilterList from "../components/FilterList";
import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import useClick from "../hook/useClick";

const Main = styled.main`
  margin-top: 104px;
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

function ProductLists({ setToast, setToastBookmark }) {
  const [numState, setNumState] = useState(0);
  const state = useSelector((state) => state.bookmark);

  // 무한 스크롤 구현
  const [dataNum, setDataNum] = useState(30);
  const [ref, inView] = useInView();
  console.log(inView);

  useEffect(() => {
    if (inView && dataNum <= 120) {
      setDataNum((prev) => (prev <= 100 ? prev + 30 : prev));
      console.log("start");
    }
  }, [inView]);

  // 헤더 햄버거컴포넌트 관리
  const { onClick } = useClick();
  return (
    <Main onClick={onClick}>
      <Container>
        <FilterList numState={numState} setNumState={setNumState} />
      </Container>
      <section>
        <List>
          {numState === 0 &&
            state.slice(0, dataNum).map((item) => (
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
              .slice(0, dataNum)
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
              .slice(0, dataNum)
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
              .slice(0, dataNum)
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
              .slice(0, dataNum)
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
      <div ref={ref} />
    </Main>
  );
}

export default ProductLists;
