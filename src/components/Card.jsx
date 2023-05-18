import styled from "styled-components";
import Description from "./Description";
import Bookmark from "./Bookmark";
import { useDispatch } from "react-redux";
import { dispatchModalOpen } from "../redux/action/actions";

const Article = styled.article`
  width: 260px;
  height: 264px;
  cursor: pointer;
  margin: 12px 0px;
`;
const ImgBox = styled.div`
  background-image: url(${(props) => (props.back ? props.back : props.image)});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 264px;
  height: 210px;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export default function Card({ data }) {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(
      dispatchModalOpen(
        data.id,
        data.brand_image_url ? data.brand_image_url : data.image_url,
        data.title ? data.title : data.brand_name,
        data.bookmarked
      )
    );
  };
  return (
    <>
      <Article onClick={onClick}>
        <ImgBox back={data.brand_image_url} image={data.image_url}>
          <Bookmark bookmark={data.bookmarked} id={data.id} />
        </ImgBox>
        <Description
          type={data.type}
          title={data.title ? data.title : data.brand_name}
          follower={data.follower}
          discount={data.discountPercentage}
          price={data.price}
          sub={data.sub_title}
        />
      </Article>
    </>
  );
}
