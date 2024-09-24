import { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css'

function App() {
  const [ number, setNumber ] = useState(0);
  // 리렌더를 발생시키는 용도
  const [ rerender, setRerender ] = useState(false);

  const plus1 =
   useCallback((number) =>{
    console.log("plus1 실행 됨(plus1 함수 생성)");
    return number + 1;
  }, [] );
  // (number) =>{
  //   console.log("plus1 실행 됨(plus1 함수 생성)");
  //   return number + 1;
  // };

  const numberPlus1 = useMemo(() => {
    console.log("useMemo 실행(plus1 함수 호출)")
    return plus1(number)
  }, [number]);
  
  useEffect(()=>{
    // plus1 함수가 변경 될 때 실행
    console.log("useEffect(plus1 생성됨)")
  }, [plus1])

  return (
  <>
  <div>number : {number}</div>
  <div>numberPlus1 : {numberPlus1}</div>
  {/* number상태의 변화 */}
  <button onClick={() => {setNumber(number + 1)}}>number + 1</button>
  {/* 리렌더를 발생시키는 용도 */}
  <button onClick={() => {setRerender(! rerender);}}>Rerender</button>
  </>    
  );
}

export default App;
