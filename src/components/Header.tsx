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
import { RootState } from "../redux/reducer/store";
import { Link } from "react-router-dom";

const Head = styled.header`
  height: 80px;
  padding: 0px ${(props) => props.theme.margin.spacing11};
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  const hambegerState = useSelector<RootState, RootState["hamberger"]>(
    (state) => state.hamberger
  );
  const dispatch = useDispatch();
  const onClick = () => {
    if (hambegerState) {
      dispatch(dispatchHambegerClose());
    }
  };
  return (
    <Head onClick={onClick}>
      <div>
        <Link to={"/"}>
          <LOGO src={img} alt="logo" />
          <Title>COZ Shopping</Title>
        </Link>
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
