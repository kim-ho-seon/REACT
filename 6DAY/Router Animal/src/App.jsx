import { useState } from "react";
import "./App.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Main from "./page/main";
import Detail from "./page/Detail";
import Search from "./page/Search";

function App() {
  const [inputValue, setInputValue] = useState("");
  // console.log(inputValue)
  const navigate = useNavigate()
  return (
    <>
      <header>
        <Link to ={'/'}><h1>💚 동물 조아 💚</h1></Link>
        <input type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)} />
        <button onClick={() => navigate(`/search?animal=${inputValue}`) }>검색</button>
      </header>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
      </Routes>
      <footer>all rights reserved to OZ</footer>
    </>
  );
}

export default App;
