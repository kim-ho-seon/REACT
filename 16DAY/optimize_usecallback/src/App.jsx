import { useCallback, useEffect, useMemo, useState } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState(0);
  const [rerender, setRerender] = useState(false);

  const plus1 = useCallback((number) => {
    console.log("plus1 실행 됨")
    return number + 1
  },[])

  const numberPlus1 = useMemo(() => {
    return plus1(number)
  }, [rerender])

  useEffect(() => {
    console.log("plus1 생성 됨")
  }, [plus1])

  return(
    <>
      <div>number : {number}</div>
      <div>numberPlus1 : {numberPlus1}</div>
      <button onClick={() => {setNumber( number + 1)}}>number + 1</button>
      <button onClick={() => {setRerender( ! rerender)}}>Rerender</button>    
    </>
  );
}

export default App
