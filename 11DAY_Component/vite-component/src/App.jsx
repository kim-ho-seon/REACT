import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const Container = styled.div`
width: 100vw;
height: 100vh;
display: grid;
place-items: center;
background-color: rgba(
    ${(props) => props.input1},
    ${(props) => props.input2},
    ${(props) => props.input3},
    ${(props) => props.input4}
    );
`;

const BlueButton = styled.button`
background-color: blue;
color: white;
padding: 10px;
border-radius: 4px;
margin: 10px;
`;

const BigBlueButton = styled(BlueButton)`
  width: 300px;
  padding: 20px;
`;

const BigTextBlueButton = styled(BigBlueButton)`
  font-size: 30px;
  font-weight: 900;
`;


// 수정한코드 오류X
const PropsButton = styled.button`
background-color: ${(props) => props.$backgroundColor || "white"};
color: ${(props) => props.$textColor || "black"};
padding: ${(props) => props.$padding || 0};
border-radius: ${(props) => props.$radius || 0};
margin: ${(props) => props.$margin || 0};
width: ${(props) => props.$width || "auto"};
font-size: ${(props) => props.$fontSize || "auto"};
font-weight: ${(props) => props.$fontWeight || 400};
`;

// 강의대로 한 코드 오류O
const BackgroundColorDiv = styled.div`
  width: 300px;
  height: 100px;
  background-color: rgba(
    ${(props) => props.input1},
    ${(props) => props.input2},
    ${(props) => props.input3},
    ${(props) => props.input4}
    );
`;

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  input { //SCSS문법 가능
    width:90%;
    &:hover{
      height: 30px;
    }
  }
  span{
      color: green;
      &:hover{ background-color: white;}
    }
`;

function App() {

  // 수정한코드 오류X
  // return (
  //   <>
  //   <Container>
  //     <div>Hello</div>
  //     <BlueButton>파란색 버튼</BlueButton>
  //     <PropsButton
  //     $backgroundColor="blue"
  //     $textColor="white"
  //     $padding="10px"
  //     $radius="4px"
  //     $margin="10px">파란색 버튼</PropsButton>
  //     <BigBlueButton>커다란 파란색 버튼</BigBlueButton>
  //     <PropsButton
  //      $backgroundColor="blue"
  //      $textColor="white"
  //      $padding="20px"
  //      $radius="4px"
  //      $margin="10px"
  //      $width= "300px">커다란 파란색 버튼</PropsButton>
  //     <BigTextBlueButton>글자도 커다란 파란색 버튼</BigTextBlueButton>
  //     <PropsButton
  //      $backgroundColor="blue"
  //      $textColor="white"
  //      $padding="20px"
  //      $radius="4px"
  //      $margin="10px"
  //      $width= "300px"
  //      $fontSize="30px"
  //      $fontWeight="900">글자도 커다란 파란색 버튼</PropsButton>

  //     <PropsButton 
  //     $backgroundColor="green" $textColor="yellow">Props 버튼</PropsButton>
  //     <PropsButton 
  //     $backgroundColor="yellow" $textColor="green">Props 버튼</PropsButton>
  //     </Container>
  //   </>
  // );
 
  // ===========================================================

  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [input3, setInput3] = useState(0);
  const [input4, setInput4] = useState(0);
  

 // 강의대로 한 코드 오류O
  return (
    <>
      <GlobalStyle />
      <Container
        input1={input1}
        input2={input2}
        input3={input3}
        input4={input4}>
        <div>Hello</div>
        <input
          type="range"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          min={0} max={255} />
        <span>{input1}</span>

        <input
          type="range"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          min={0} max={255} />
        <span>{input2}</span>

        <input
          type="range"
          value={input3}
          onChange={(e) => setInput3(e.target.value)}
          min={0} max={255} />
        <span>{input3}</span>

        <input
          type="range"
          value={input4}
          onChange={(e) => setInput4(e.target.value)}
          min={0} step={0.01} max={1} />
        <span>{input4}</span>

        <BackgroundColorDiv
          input1={input1}
          input2={input2}
          input3={input3}
          input4={input4}
        />
      </Container>
    </>
  );
}

export default App;
