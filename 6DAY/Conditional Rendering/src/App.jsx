import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [mood, setMood] = useState("Normal");
 return(
  <>
    <Face3 mood={mood}/>
    <div className={mood === "Happy" ? 'happy' : mood === "Normal" ? 'normal' : 'sad'}>기분 : {mood}</div>
    <div>
      <button onClick={()=>setMood("Happy")}>Happy</button>
      <button onClick={()=>setMood("Normal")}>Nomal</button>
      <button onClick={()=>setMood("Sad")}>Sad</button>
    </div>
  </>
 )
}

// 1. if문으로 리턴하는 JSX문 바꾸기
function Face1({mood}){
  if(mood === "Happy"){
    return <div>🤗</div>
  } else if (mood === "Normal") {
    return <p>🫢</p>
  } else {
    return <span>😱</span>
  }
}

// 2. 삼항연산자 사용
function Face2({ mood }) {
  return (
    <>
      {mood === "Happy" ? (
        <div>🤗</div>
      ) : mood === "Normal" ? (
        <p>🫢</p>
      ) : (
        <span>😱</span>
      )}
    </>
  )
}

// 3. 논리 연산자
function Face3 ({mood}) {
  return (
    <>
    {mood === "Happy" && <div>🤗</div> }
    {/* {mood === "Normal" && <p>🫢</p> }
    {mood === "Happy" && <span>😱</span> } */}
    </>
  )
}
export default App;
