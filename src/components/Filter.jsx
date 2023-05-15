import styled from "styled-components";

const Section = styled.section`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ImgDiv = styled.div`
  background-image: url(${(props) => props.imgSrc});
  width: 82px;
  height: 82px;
  border-radius: 50%;
`;

const Title = styled.span`
  width: 82px;
  text-align: center;
  padding: 6.5px 0px;
  color: ${(props) => (props.numState === props.index ? "#412DD4" : "black")};
`;

const Line = styled.div`
  width: 40px;
  border-bottom: 4px solid #412dd4;
`;

export default function Filter({
  imgSrc,
  title,
  index,
  numState,
  setNumState,
}) {
  const handleFilter = () => {
    const number = index;
    setNumState(number);
  };
  return (
    <Section onClick={handleFilter}>
      <ImgDiv imgSrc={imgSrc} />
      <Title numState={numState} index={index}>
        {title}
      </Title>
      {index === numState && <Line />}
    </Section>
  );
}
