import { useState } from "react";
import faRegular from "../src/assets/img/fa-regular_copy.png";
import styled from "styled-components";
import arrowLeft from "../src/assets/img/bx_arrow-to-left.png";
const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MainContainer = styled.div`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 24px;
  color: #817d92;
  width: 700;
  text-transform: capitalize;
  display: flex;
`;
const OutputWrapper = styled.div`
  width: 100%;
  margin-top: 30px 40px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #18171f;
`;
const CopiedContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Output = styled.span`
  font-size: 32px;
  font-weight: 700;
  color: #817d92;
  background-color: inherit;
`;
1;
const CopiedSpan = styled.span`
  margin-right: 10px;
  color: #a4ffaf;
  font-size: 18px;
  font-weight: 700;
`;
// content

const ContentContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #18171f;
`;
const CharacterContainer = styled.div`
  width: 100%;
`;
const CharacterText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CharacterTitle = styled.span`
  color: #e6e5ea;
  font-size: 18px;
  font-weight: 700;
`;
const CharacterNumber = styled.span`
  color: #a4ffaf;
  font-size: 32px;
  font-weight: 700;
`;
const RangeInput = styled.input`
  accent-color: #a4ffaf;
  cursor: pointer;
  margin-top: 20px;
  width: 100%;
`;

// chackbox

const ChackboxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 10px;
  margin: 30px 0px;
  font-size: 18px;
  font-weight: 700;
  text-transform: capitalize;
  color: #e6e5ea;
  accent-color: #a4ffaf;
`;
const Chackbox = styled.input`
  cursor: pointer;
  margin-right: 10px;
  width: 20px;
  height: 20px;
`;

// button

const GenerateButton = styled.div`
  width: 100%;
  border: 1px solid #a4ffaf;
`;
const Button = styled.button`
  display: flex;
  column-gap: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 15px 0px;
  font-size: 18px;
  font-weight: 700;
  color: #a4ffaf;
  text-transform: uppercase;
  background-color: inherit;
  cursor: pointer;
`;
function App() {
  const [data, setData] = useState(0);
  return (
    <MainWrapper>
      <MainContainer>
        <Title>password generator</Title>
        <OutputWrapper>
          <Output>P4$5W0rD!</Output>
          <CopiedContainer>
            <CopiedSpan>copied</CopiedSpan>
            <img src={faRegular} alt="coppied icon" />
          </CopiedContainer>
        </OutputWrapper>
        <ContentContainer>
          <CharacterContainer>
            <CharacterText>
              <CharacterTitle>character length</CharacterTitle>
              <CharacterNumber>{data}</CharacterNumber>
            </CharacterText>
            <RangeInput
              type="range"
              min="0"
              max="10"
              step="1"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </CharacterContainer>
          <ChackboxContainer>
            <div>
              <Chackbox
                type="checkbox"
                id="uppercase"
                name="vehicle1"
                value="Bike"
              />
              <label for="uppercase">include uppercase letters</label>
            </div>
            <div>
              <Chackbox
                type="checkbox"
                id="lowercase"
                name="vehicle1"
                value="Bike"
              />
              <label for="lowercase">include lowercase letters</label>
            </div>
            <div>
              <Chackbox
                type="checkbox"
                id="number"
                name="vehicle1"
                value="Bike"
              />
              <label for="number">include numbers</label>
            </div>
            <div>
              <Chackbox
                type="checkbox"
                id="symbols"
                name="vehicle1"
                value="Bike"
              />
              <label for="symbols">include symbols</label>
            </div>
          </ChackboxContainer>
          
        </ContentContainer>
      </MainContainer>
    </MainWrapper>
  );
}

export default App;
