import { Component, useEffect, useState } from 'react'
import './App.css'

function App () {

  const [data, setData] = useState([])
  useEffect(() => { // 데이터를 받아오고 데이터 상태를 업데이트 업테이트후 리렌더링 유즈이팩트실행 업데이트 리렌더링... 막기위해 빈배열
    fetch("http://localhost:3000/data")
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);

 return(
  <>
  <div>data list</div>
  {data.map((el) => (<div key={el.id}>{el.content}</div> ))}
  </>
 );
}
export default App
