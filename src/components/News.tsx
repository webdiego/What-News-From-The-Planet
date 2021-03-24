import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import styled from "styled-components";

import World from "../img/world.png";
interface INews {
  Title?: string;
  Description?: string;
  Img?: string;
  Date?:string;
  Source?:string;
}
function News({ Title, Description, Img }: INews) {
  return (
    <ContainerNews>
      <h3>{Title}</h3>
      <p>{Description}</p>
      <LazyLoadImage
        style={{ width: "20rem", height: "12rem", objectFit: "fill" }}
        src={Img ? Img : World}
        alt=""
        effect="blur"
      />
    </ContainerNews>
  );
}

export default News;
const ContainerNews = styled.div`
  border: 2px solid ${(props) => props.theme.colors.border};
  margin: 2rem 0;
  padding: 2rem;
  width:80%;
  
`;
