import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
  fetch('http://localhost:3000/data')
    .then((res)=> res.json())
    // .then((res)=>console.log(res));
    .then((res) => setData (res));
  },[]) // 처음에 렌더링 될때만 데이터 받아오기

  return (
    <>
    <div>데이터 목록</div>
    {data.map((el)=> (
      <div key= {el.id}>{el.content}</div>))}
    </>
  )
}

export default App;

