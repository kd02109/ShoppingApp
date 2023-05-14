import styled from "styled-components";
import Description from "./Description";

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
`;

export default function Card({ data }) {
  return (
    <Article>
      <ImgBox back={data.brand_image_url} image={data.image_url} />
      <Description
        type={data.type}
        title={data.title ? data.title : data.brand_name}
        follower={data.follower}
        discount={data.discountPercentage}
        price={data.price}
        sub={data.sub_title}
      />
    </Article>
  );
}
