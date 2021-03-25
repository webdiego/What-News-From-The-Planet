import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import styled from "styled-components";

import World from "../img/world.png";
interface INews {
  Title?: string;
  Description?: string;
  Img?: string;
  Dates?:string;
  Author?:string;
  Index:number
}
function News({ Title, Description, Img ,Dates,Author ,Index}: INews) {
  return (
    <ContainerNews>
      <h3>{Title}</h3>
      <p>{Dates}</p>
      <p>{Description}</p>
      <LazyLoadImage
        style={{ width: "20rem", height: "12rem", objectFit: "cover" }}
        src={Img ? Img : World}
        alt=""
        effect="blur"
      />
      <h2>{Author}</h2>
      <p>{Index}</p>
      
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
