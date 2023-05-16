import styled from "styled-components";
import Description from "./Description";
import { useState } from "react";
import Modal from "./Modal";
import Bookmark from "./Bookmark";

const Article = styled.article`
  width: 264px;
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

export default function Card({ data, setToast, setToastBookmark }) {
  const [modalClick, setModalClick] = useState(false);
  return (
    <>
      <Article onClick={() => setModalClick(true)}>
        <ImgBox back={data.brand_image_url} image={data.image_url}>
          <Bookmark
            bookmark={data.bookmarked}
            id={data.id}
            setToast={setToast}
            setToastBookmark={setToastBookmark}
          />
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
      {modalClick && (
        <Modal
          picture={data.brand_image_url ? data.brand_image_url : data.image_url}
          title={data.title}
          setModalClick={setModalClick}
          bookmark={data.bookmarked}
          id={data.id}
          setToast={setToast}
          setToastBookmark={setToastBookmark}
        />
      )}
    </>
  );
}
