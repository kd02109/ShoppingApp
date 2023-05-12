import { useRouteError } from "react-router-dom";
import styled from "styled-components";

const ErrorDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 40px;
  }
  p {
    font-size: 20px;
  }
`;

function NotFound() {
  const error = useRouteError();
  return (
    <ErrorDiv>
      <h1>404 Not Found</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>죄송합니다. 예상치 못한 에러가 발생했습니다.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </ErrorDiv>
  );
}

export default NotFound;