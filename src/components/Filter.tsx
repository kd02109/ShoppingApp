import styled from "styled-components";
import React from "react";

const Section = styled.section`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ImgDiv = styled.div<{ imgSrc: string }>`
  background-image: url(${(props) => props.imgSrc});
  width: 82px;
  height: 82px;
  border-radius: 50%;
`;

const Title = styled.span`
  width: 82px;
  text-align: center;
  padding: 6.5px 0px;
`;

const Line = styled.div`
  width: 40px;
  border-bottom: 4px solid #412dd4;
`;

interface Prop {
  imgSrc: string;
  title: string;
  filterState: string;
  setFilterState: React.Dispatch<React.SetStateAction<string>>;
}

export default function Filter({
  imgSrc,
  title,
  filterState,
  setFilterState,
}: Prop) {
  const handleFilter = () => {
    const name = title;
    setFilterState(name);
  };
  return (
    <Section onClick={handleFilter}>
      <ImgDiv imgSrc={imgSrc} />
      <Title>{title}</Title>
      {title === filterState && <Line />}
    </Section>
  );
}
