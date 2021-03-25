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
  Link?:string;
}

function News({ Title, Description, Img ,Dates,Author,Link }: INews) {
   console.log(typeof Dates)
  return (
    <ContainerNews>
      <TitleNews>{Title}</TitleNews>
      <DateNews><InfoSpan>Date:</InfoSpan>{Dates?.slice(0,10)} <InfoSpan>at</InfoSpan> {Dates?.slice(11,16)}</DateNews>
      <ContentNews>{Description}</ContentNews>
      <LazyLoadImage
        
        src={Img  ? Img : World}
        alt=""
        effect="blur"
      />
      <InfoContainer>
      <p><InfoSpan>Author:</InfoSpan>{Author ? Author : 'Author Not Available'}</p>      
      <p><InfoSpan>Read the full article:</InfoSpan> <a href={Link}>Link</a></p>      
      </InfoContainer>
    </ContainerNews>
    
  );
}

export default News;
const ContainerNews = styled.div`
  border: 2px solid ${(props) => props.theme.colors.border};
  margin: 2rem 0;
  padding: 2rem;
  width:100%;
  background-color: ${(props) => props.theme.colors.backgroundSelect};
`;
const TitleNews = styled.h2`
margin:1rem 0;

`
const DateNews = styled.p`
margin:1rem 0;

`
const ContentNews = styled.p`
margin:1rem 0;
`
const InfoSpan = styled.span`
font-weight:bold;
`
const InfoContainer = styled.div`
 display:flex;
justify-content:space-between;
margin-top:2rem;

@media (max-width: 1068px) {
    flex-direction: column;
  }
`

