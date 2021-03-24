import { useState } from "react";
import Fetch from "./Fetch";
import styled, { ThemeProvider } from "styled-components";

import Light from "../themes/Light";
import Dark from "../themes/Dark";

function Search() {
  const [country, setCountry] = useState<string>("it");
  const [category, setCategory] = useState<string>("general");
  const [mode, setMode] = useState<string>("Light");
  const [toggle,setToggle] =useState<boolean>(true)
  return (
    <ThemeProvider theme={mode === "Dark" ? Dark : Light} >
      <Container  >
        <Title className="main">
          <Toggle>
            <Planet onClick={() => setMode("Light")}>🌍</Planet>
            <Planet onClick={() => setMode("Dark")}>🌑</Planet>
          </Toggle>
          <div className="title">
            <h1>What?</h1>
            <SubTitle>News from the planet</SubTitle>
          </div>
        </Title>
        <ContainerSelect>
          {/* COUNTRY */}
          <LabelStyle>Country</LabelStyle>
          <SelectStyle value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="it">Italy </option>
            <option value="de">Germany</option>
            <option value="us">USA</option>
            <option value="fr">France</option>
            <option value="au">Australia</option>
            <option value="jp">Japan</option>
            <option value="ar">Argentina</option>
            <option value="br">Brasil</option>
            <option value="cn">China</option>
            <option value="gb">United Kingdom</option>
            <option value="hg">Hong Kong</option>
            <option value="in">India</option>
            <option value="kr">Korea</option>
            <option value="mx">Mexico</option>
            <option value="ng">Nigeria</option>
            <option value="nl">Netherlands</option>
            <option value="ph">Philippines</option>
            <option value="pt">Portugal</option>
            <option value="rs">Russia</option>
            <option value="sg">Singapore</option>
            <option value="th">Thailand</option>
            <option value="tr">Turkey</option>
            <option value="vz">Venezuela</option>
            <option value="za">South Africa</option>
          </SelectStyle>
          {/* CATEGORY */}
          <LabelStyle>Category</LabelStyle>
          <SelectStyle value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="business">Business 💰</option>
            <option value="entertainment">Entertainment 📺</option>
            <option value="general">General 🧵</option>
            <option value="science">Science 🔬</option>
            <option value="sports">Sports 🚵‍♀️</option>
            <option value="technology">Technology 👨‍💻</option>
            <option value="health">Health 🧡</option>
          </SelectStyle>
        </ContainerSelect>
        <ButtonSearch onClick={()=>setToggle(!toggle)}>Search 🧭</ButtonSearch>
        {toggle && (
         <Fetch country={country} category={category} /> 
        )}
      </Container>
    </ThemeProvider>
  );
}

export default Search;

const Container = styled.div`
  color: ${(props) => props.theme.colors.textColor};
  background-color: ${(props) => props.theme.colors.backgroundColor};
  padding: 2rem;
`;
const Title = styled.div`
  display: flex;
  align-items: flex-start;
`;
const Toggle = styled.div`
  border: 3px solid ${(props) => props.theme.colors.border};
  border-radius: 30px;
  margin-right: 0.5rem;
  background-color: ${(props) => props.theme.colors.backgroundToggle};
`;
const Planet = styled.p`
  font-size: 1.5rem;
  margin: 0.4rem 0.2rem;
  cursor: pointer;
`;

//Container select/ label / select
const ContainerSelect = styled.div`
  margin: 1rem 0;
`;
const LabelStyle = styled.label`
  font-size: 1.4rem;
  font-weight: 500;
`;
const SelectStyle = styled.select`
  margin: 0 1.5rem 0 0.5rem;
  font-size: 1.3rem;
  text-align: center;
  padding: 0.2rem 1rem;
  color: ${(props) => props.theme.colors.textColor};
  background-color: ${(props) => props.theme.colors.backgroundSelect};
  border: 3px solid ${(props) => props.theme.colors.border};
  cursor: pointer;
  /* for Firefox */
  -moz-appearance: none;
  /* for Chrome */
  -webkit-appearance: none;
`;

const SubTitle = styled.p`
  font-weight: 500;
  transform: translateY(-13px) translateX(5px);
`;
const ButtonSearch = styled.button`
 padding:.3rem .8rem;
 font-size: 1.4rem;
 color: ${(props) => props.theme.colors.textButton};
  background-color: ${(props) => props.theme.colors.backgroundButton};
  border: 3px solid ${(props) => props.theme.colors.border};
`