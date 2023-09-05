import styled from "styled-components";
import allImg from "../assest/all.png";
import brandImg from "../assest/brand.png";
import categoryImg from "../assest/category.png";
import exhibitionImg from "../assest/exhibition.png";
import productImg from "../assest/product.png";
import Filter from "./Filter";

const FilterUl = styled.ul`
  width: 554px;
  height: 110px;
  display: flex;
  gap: 36px;
`;

interface Prop {
  filterState: string;
  setFilterState: React.Dispatch<React.SetStateAction<string>>;
}

const imgArr = [allImg, productImg, categoryImg, exhibitionImg, brandImg];
const titleArr = ["전체", "상품", "카테고리", "기획전", "브랜드"];
export default function FilterList({ filterState, setFilterState }: Prop) {
  return (
    <FilterUl>
      {imgArr.map((item, index) => (
        <Filter
          key={index}
          imgSrc={item}
          title={titleArr[index]}
          filterState={filterState}
          setFilterState={setFilterState}
        />
      ))}
    </FilterUl>
  );
}
