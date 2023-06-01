import styled, { css } from "styled-components";
import Description from "./Description";
import Bookmark from "./Bookmark";
import { useDispatch } from "react-redux";
import { dispatchModalOpen } from "../redux/action/actions";
import { AppDispatch } from "../redux/reducer/store";
import { APIData } from "../api/api";

const Article = styled.article`
  width: 260px;
  height: 264px;
  cursor: pointer;
  margin: 12px 0px;
`;
interface StyledDivProp {
  imageURl: string;
  imageURl2: string;
}

const ImgBox = styled.div<StyledDivProp>`
  ${(props) =>
    props.imageURl2
      ? css`
          background-image: url(${props.imageURl2});
        `
      : css`
          background-image: url(${props.imageURl});
        `}
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 264px;
  height: 210px;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;
interface Prop {
  data: APIData;
}

export default function Card({ data }: Prop) {
  const dispatch: AppDispatch = useDispatch();

  const onClick = () => {
    dispatch(
      dispatchModalOpen(
        data.id,
        data.brand_image_url ? data.brand_image_url! : data.image_url!,
        data.title ? data.title! : data.brand_name!,
        data.bookmarked!
      )
    );
  };

  //storybookserring
  if (!data) {
    data = {
      id: 90,
      type: "Exhibition",
      title: "맥북 모음전",
      sub_title: "애플 케어 추가 할인",
      brand_name: null,
      price: null,
      discountPercentage: null,
      image_url:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2020&q=80",
      brand_image_url: null,
      follower: null,
    };
  }

  return (
    <>
      <Article onClick={onClick}>
        <ImgBox imageURl={data.brand_image_url!} imageURl2={data.image_url!}>
          <Bookmark bookmark={data.bookmarked!} id={data.id} />
        </ImgBox>
        <Description
          type={data.type}
          title={data.title ? data.title! : data.brand_name!}
          follower={data.follower!}
          discount={data.discountPercentage!}
          price={data.price!}
          sub={data.sub_title!}
        />
      </Article>
    </>
  );
}
