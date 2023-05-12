import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    0%{
        opacity: 0.3;
        transform: scale(0.7);
    }
    50%{
        opacity: 1;
        transform: scale(1.0);
    }
    100%{
        opacity: 0;
        transform: scale(0.5);
    }
`;

const LoadingBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: black;
  margin-left: 10px;
  transition: 1s;
  animation: ${rotate} 1s 0s linear infinite;
  &:first-child {
    background-color: red;
    animation-delay: 0s;
  }
  &:nth-child(2) {
    background-color: orange;
    animation-delay: 0.2s;
  }
  &:last-child {
    background-color: yellowgreen;
    animation-delay: 0.4s;
  }
`;

export default function Loading() {
  return (
    <LoadingBox>
      <Circle />
      <Circle />
      <Circle />
    </LoadingBox>
  );
}
