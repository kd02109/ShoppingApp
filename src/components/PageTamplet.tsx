import styled from "styled-components";
import FilterList from "../components/FilterList";
import { useState } from "react";
import useClick from "../hook/useClick";
import CardList from "../components/CardList";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

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

const filterSet = {
  all: "전체",
  product: "상품",
  categoryl: "카테고리",
  exhibition: "기획전",
  brand: "브랜드",
};

const itemSetType = {
  product: "Product",
  category: "Category",
  brand: "Brand",
  exhibition: "Exhibition",
};
const BASENUM = 30;
function PageTemplate({ state }) {
  const [filterState, setFilterState] = useState("전체");
  const { onClick } = useClick();
  // 무한 스크롤 구현
  const { length } = state;
  const [dataNum, setDataNum] = useState(BASENUM);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView && dataNum <= length) {
      setDataNum((prev) => (prev <= length ? prev + BASENUM : length));
      console.log("start");
    }
  }, [inView]);

  return (
    <Main onClick={onClick}>
      <Container>
        <FilterList filterState={filterState} setFilterState={setFilterState} />
      </Container>
      {filterState === filterSet.all && (
        <CardList state={state.slice(0, dataNum)} />
      )}
      {filterState === filterSet.product && (
        <CardList
          state={state
            .slice(0, dataNum)
            .filter((item) => item.type === itemSetType.product)}
        />
      )}
      {filterState === filterSet.categoryl && (
        <CardList
          state={state
            .slice(0, dataNum)
            .filter((item) => item.type === itemSetType.category)}
        />
      )}
      {filterState === filterSet.exhibition && (
        <CardList
          state={state
            .slice(0, dataNum)
            .filter((item) => item.type === itemSetType.exhibition)}
        />
      )}
      {filterState === filterSet.brand && (
        <CardList
          state={state
            .slice(0, dataNum)
            .filter((item) => item.type === itemSetType.brand)}
        />
      )}
      <div ref={ref} />
    </Main>
  );
}

export default PageTemplate;
