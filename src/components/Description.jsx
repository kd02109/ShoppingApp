import styled from "styled-components";

const Container = styled.div`
  width: 264px;
  margin-top: 6px;
  display: flex;
  justify-content: space-between;
`;
const RightBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const LeftBox = styled(RightBox)``;

const Title = styled.span`
  font-size: ${(props) => props.theme.font.small};
  font-weight: 600;
  text-align: start;
`;
const SubTitle = styled(Title)`
  font-weight: 400;
  margin-top: 3px;
  text-align: start;
`;

const LeftTitle = styled(Title)`
  text-align: end;
  color: ${(props) => (props.color ? props.theme.percentColor : "black")};
`;

const LeftSub = styled(SubTitle)`
  text-align: end;
`;

export default function Description({
  type,
  title,
  follower,
  discount,
  price,
  sub,
}) {
  if (type === "Product") {
    return (
      <Container>
        <RightBox>
          <Title>{title}</Title>
        </RightBox>
        <LeftBox>
          <LeftTitle color="percent">{discount}%</LeftTitle>
          <LeftSub>
            {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
          </LeftSub>
        </LeftBox>
      </Container>
    );
  }
  if (type === "Category") {
    return (
      <Container>
        <RightBox>
          <Title>{title}</Title>
        </RightBox>
      </Container>
    );
  }
  if (type === "Brand") {
    return (
      <Container>
        <RightBox>
          <Title>{title}</Title>
        </RightBox>
        <LeftBox>
          <LeftTitle>관심고객수</LeftTitle>
          <LeftSub>
            {follower.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </LeftSub>
        </LeftBox>
      </Container>
    );
  }
  if (type === "Exhibition") {
    return (
      <Container>
        <RightBox>
          <Title>{title}</Title>
          <SubTitle>{sub}</SubTitle>
        </RightBox>
        <LeftBox></LeftBox>
      </Container>
    );
  }
}