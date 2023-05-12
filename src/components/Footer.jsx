import styled from "styled-components";

const Foot = styled.footer`
  width: 100%;
  height: 58px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed; //포지션 임시 고정
  bottom: 0; // 포지션 임시 고정
  color: ${(props) => props.theme.footerColor};
  border-top: 1px solid ${(props) => props.theme.footerColor};
  span {
    font-size: ${(props) => props.theme.font.footer};
  }
  span:first-child {
    margin-bottom: 6px;
  }
`;

export default function Footer() {
  return (
    <Foot>
      <span>개인정보 처리방침 | 이용 약관</span>
      <span>All rights reserved @ Codestates</span>
    </Foot>
  );
}
