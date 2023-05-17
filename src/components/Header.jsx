import styled from "styled-components";
import img from "../assest/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown";
import { useDispatch, useSelector } from "react-redux";
import {
  dispatchHambeger,
  dispatchHambegerClose,
} from "../redux/action/actions";

const Head = styled.header`
  width: 90%;
  height: 80px;
  padding-left: ${(props) => props.theme.margin.spacing11};
  padding-right: ${(props) => props.theme.margin.spacing11};
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

const LeftBox = styled.div`
  position: relative;
`;

export default function Header() {
  const hambegerState = useSelector((state) => state.hamberger);
  const dispatch = useDispatch();
  const onClick = () => {
    if (hambegerState) {
      dispatch(dispatchHambegerClose());
    }
  };
  return (
    <Head onClick={onClick}>
      <div>
        <LOGO src={img} alt="logo" />
        <Title>COZ Shopping</Title>
      </div>
      <LeftBox>
        <StyledIcon
          icon={faBars}
          onClick={(e) => {
            e.stopPropagation();
            dispatch(dispatchHambeger());
          }}
        />
        {hambegerState && <Dropdown />}
      </LeftBox>
    </Head>
  );
}
