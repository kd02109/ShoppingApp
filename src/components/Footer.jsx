import styled from "styled-components";
import useClick from "../hook/useClick";

const Foot = styled.footer`
  width: 100%;
  height: 58px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  color: ${(props) => props.theme.color.gray};
  border-top: 1px solid ${(props) => props.theme.color.gray};
  span {
    font-size: ${(props) => props.theme.font.footer};
  }
  span:first-child {
    margin-bottom: 6px;
  }
`;

export default function Footer() {
  const { onClick } = useClick();

  return (
    <Foot onClick={onClick}>
      <span>개인정보 처리방침 | 이용 약관</span>
      <span>All rights reserved @ Codestates</span>
    </Foot>
  );
}
