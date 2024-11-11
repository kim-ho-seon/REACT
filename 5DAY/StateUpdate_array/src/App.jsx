import { useState } from 'react'
import './App.css'

function App() {
  let [number, setNumber] = useState(1);
  console.log("number (after render):", number)
  const handler1 = () => {
    // setNumber(1) // render X
    setNumber(number + 1)
    console.log(number)
  }
  let [array, setArray] = useState([1, 2, 3]);
  console.log("number (after render):", array)
  const handler2 = () => {
   // array = [1, 2, 3, 4]; 
   // console.log(array); // 할당은 되지만 렌더링 X

   // setArray ([1, 2, 3, 4]) // 같은 값이어도 계속 렌더링 됨

   // array.push(5);
   // setArray(array);
   // console.log(array); // 값은 변경O 렌더링X

   const newArray = array.slice(); // 상태복사  array.slice() = [...array]
   newArray.push(5); //복사된 배열에 5 추가
   setArray(newArray); // 상태 없데이트로 재 랜더링
   
  }
 
  return (
    <>
      <div>number: {number}</div>
      <button onClick={handler1}>State Update!!</button>
      <div>array: [{array.join(",")}]</div>
      <button onClick={handler2}>State Update!!</button>
    </>
  );
}


export default App;
