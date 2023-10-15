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
  margin-top: 20px;
  cursor: pointer;
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
const StrongDetail = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 25px 32px;
  background-color: #24232c;
  margin-bottom: 32px;
`;
const StrongTitle = styled.span`
  color: var(--Grey, #817d92);
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
`;
const Description = styled.span`
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  color: #e6e5ea;
`;
const StrongLineContainer = styled.div`
  display: flex;
  column-gap: 9px;
`;
const StrongLine = styled.div`
  width: 10px;
  height: 28px;
  border: 2px solid #e6e5ea;
`;
function App() {
  const [range, setRange] = useState(10);

  const [strength, setStrength] = useState(0);
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [password, setPassword] = useState("");

  const [copiedArray, setCopiedArray] = useState("");
  //strong
  const [line1, setline1] = useState("initial");
  const [line2, setline2] = useState("initial");
  const [line3, setline3] = useState("initial");
  const [line4, setline4] = useState("initial");
  const [strengText, setStrengText] = useState("");

  function handleStrength(event, text) {
    if (text === "Include Uppercase Letters") {
      setUpperCase(!upperCase);
    } else if (text === "Include Lowercase Letters") {
      setLowerCase(!lowerCase);
    } else if (text === "Include Numbers") {
      setNumber(!number);
    } else {
      setSymbol(!symbol);
    }

    if (event.target.checked) {
      setStrength((prev) => prev + 1);
    } else {
      setStrength((prev) => prev - 1);
    }
  }

  const datas = [
    "Include Uppercase Letters",
    "Include Lowercase Letters",
    "Include Numbers",
    "Include Symbols",
  ];
  console.log(strength);

  function generatePassword() {
    const upperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseSet = "abcdefghijklmnopqrstuvwxyz";
    const numberSet = "0123456789";
    const symbolSet = "@#$%^&*()_+~|}{[]></-=";

    let chars = "";
    if (upperCase) {
      chars += upperCaseSet;
    }
    if (lowerCase) {
      chars += lowerCaseSet;
    }
    if (number) {
      chars += numberSet;
    }
    if (symbol) {
      chars += symbolSet;
    }
    console.log(chars);

    let newPassword = "";
    for (let i = 0; i < range; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      newPassword += chars[randomIndex];
    }
    setPassword(newPassword);
    teststrongs();
  }

  function teststrongs() {
    if (strength === 1) {
      setline1("#F64A4A");
      setline2("initial");
      setline3("initial");
      setline4("initial");
      setStrengText("TOO WEAK!");
    } else if (strength === 2) {
      setline1("#FB7C58");
      setline2("#FB7C58");
      setline3("initial");
      setline4("initial");
      setStrengText("WEAK");
    } else if (strength === 3) {
      setline1("#F8CD65");
      setline2("#F8CD65");
      setline3("#F8CD65");
      setline4("initial");
      setStrengText("MEDIUM");
    } else {
      setline1("#A4FFAF");
      setline2("#A4FFAF");
      setline3("#A4FFAF");
      setline4("#A4FFAF");
      setStrengText("STRONG");
    }
  }
  return (
    <MainWrapper>
      <MainContainer>
        <Title>password generator</Title>
        <OutputWrapper>
          <Output>{password}</Output>
          <CopiedContainer>
            <CopiedSpan>copied</CopiedSpan>
            <img
              onClick={() => setCopiedArray(password)}
              src={faRegular}
              alt="coppied icon"
            />
          </CopiedContainer>
        </OutputWrapper>
        <ContentContainer>
          <CharacterContainer>
            <CharacterText>
              <CharacterTitle>character length</CharacterTitle>
              <CharacterNumber>{range}</CharacterNumber>
            </CharacterText>
            <RangeInput
              type="range"
              min="0"
              max="20"
              step="1"
              value={range}
              onChange={(event) => setRange(event.target.value)}
            />
          </CharacterContainer>
          <ChackboxContainer>
            {datas.map((text, index) => {
              return (
                <div className="chackWrapper" key={index}>
                  <div className="chackContainer">
                    <Chackbox
                      className="checkbox"
                      type="checkbox"
                      onChange={(event) => handleStrength(event, text)}
                    />
                    <div className="custom-checkbox"></div>
                  </div>
                  <label htmlFor="uppercase">{text}</label>
                </div>
              );
            })}
          </ChackboxContainer>
          <StrongDetail>
            <StrongTitle>strength</StrongTitle>
            <StrongLineContainer>
              <Description>{strengText}</Description>
              <StrongLine style={{ backgroundColor: line1 }}></StrongLine>
              <StrongLine style={{ backgroundColor: line2 }}></StrongLine>
              <StrongLine style={{ backgroundColor: line3 }}></StrongLine>
              <StrongLine style={{ backgroundColor: line4 }}></StrongLine>
            </StrongLineContainer>
          </StrongDetail>
          <GenerateButton>
            <Button onClick={strength == 0 ? null : generatePassword}>
              generate
              <img src={arrowLeft} alt="arrow left icon" />
            </Button>
          </GenerateButton>
        </ContentContainer>
      </MainContainer>
    </MainWrapper>
  );
}

export default App;
