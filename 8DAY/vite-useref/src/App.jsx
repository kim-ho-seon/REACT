import { useRef, useState } from 'react'
import './App.css'

function App(){
return(
  <>
  <ControlledInput />
  <br />
  <UseRefInput/>
  <hr/>
  <Counter/>
  </>
);
}
export default App;

const ControlledInput = () => {
  const [inputValue, setInputValue] = useState(' ')
  console.log("controlledInput")
  return (
    <input value={inputValue}
    onChange={(event) => setInputValue(event.target.value)}/>
  );
}

const UseRefInput = () => {
  const inputRef = useRef(null);
  console.log("UseRefInput");
  const getInputValue = () =>{
     console.log(inputRef.current.value);
    // doucument.querySelector('input).value
    // 돔의 주소를 가지고 올 수 있다. 돔에서 사용되는 메소드들 모두 사용 가능
  };
  const focusInput = () => {
    inputRef.current.focus()
    // 특정 input에 포커스 
  }
  return <>
  <input ref={inputRef}/>
  <button onClick={getInputValue}>input 값 가져오기</button>
  <br />
  <br />
  <br />
  <button onClick={focusInput}>focus</button>
  </>
}

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const numberRef = useRef(null);
  return (
    <>
      <div>counter: {counter}</div>
      <button onClick={() => setCounter(prev => prev + 1)}>+</button>
      <button onClick={() => setCounter(prev => prev - 1)}>-</button>
      <br />
      <button onClick={() => (numberRef.current = counter)}>Keep Value</button>
      <button onClick={() => console.log(numberRef.current)}>Show Value</button>
    </>
  );
}
