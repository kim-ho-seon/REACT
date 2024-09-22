import { contents } from "./assets/data/contents";
import Content from "./components/Content";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Tab from "./components/Tab";
import styled, { createGlobalStyle, css } from "styled-components";
import { flexMixin, gap_padding_radius } from "./syled/style";
import { useState } from "react";


// 태그드 템플릿시터럴방식(템플릿 리터럴에 함수를 연결하는 자바스크립트기능)
const Container = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-template-rows: 80px 40px 1fr;
  width: 100vw;
  height: 100vh;
`;

const StyledMain = styled.main`
    width: 100%;
  padding: ${gap_padding_radius};
 
  ${flexMixin(undefined, 'flex-start', undefined, undefined,'wrap' )}

  section {
    width: 50%;
    height: auto;
    padding: 10px;

    &>img {
      width: 100%;
      border-radius: 10px;
    }

    &>div {
      ${flexMixin('row',undefined, undefined,'10px' )}
      padding-top: 10px;
    }

    div {
      img {
        width: 30px;
        border-radius: 100%;
      }

      p:first-child {
        font-weight: 600;
      }

      p:last-child {
        font-size: 0.9rem;
        color: gray;
      }
    }
  }
`;

const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
  display: none;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: background-color 0.3s;
}

${(props) =>
    props.darkMode === true
     ? css`
      *{
        background-color: black;
        color: white;
      }
      svg{
        fill: white
      }
      .TpDiX form button {
         background-color: #626262;}
      form{
        button {
          background-color: #626262;
          div{
            background-color: rgba(98, 98, 98, 0);
            svg{
        background-color: rgba(98, 98, 98, 0) ;
            }
         }
        }
      }
      .kSZqhI ul li {
        background-color: #3f3f3f;
        &:first-child{
          background-color: #acacac;
        }
      }
        `
      : ""
  }
  `;

// styled-components`**의 CSS-in-JS 기능 css``
function App() {
  const [darkMode, setDarkMode] = useState(true);
  
  return (
    <Container>
      <GlobalStyle darkMode={darkMode}/>
      <Header setDarkMode={setDarkMode} />
      <Nav />
      <Tab />
      <StyledMain>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </StyledMain>
    </Container>
  );
}

export default App;
