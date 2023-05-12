import styled from "styled-components";
import img from "../assest/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Head = styled.header`
  width: 90%;
  height: 80px;
  padding-left: ${(props) => props.theme.outerMargin};
  padding-right: ${(props) => props.theme.outerMargin};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
`;

const LOGO = styled.img`
  width: 55px;
  height: 30px;
  margin-right: 12px;
`;
// <FontAwesomeIcon icon={faFaceRelieved} />
const Title = styled.span`
  font-size: ${(props) => props.theme.font.large};
  font-weight: 600;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  width: 30px;
  height: 20px;
  cursor: pointer;
`;

export default function Header() {
  return (
    <Head>
      <div>
        <LOGO src={img} alt="logo" />
        <Title>COZ Shopping</Title>
      </div>
      <div>
        <StyledIcon icon={faBars} />
      </div>
    </Head>
  );
}
