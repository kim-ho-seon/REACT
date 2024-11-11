import { Component, useState } from 'react'
import './App.css'

function functionApp() {
  const [counter, setCounter] = useState(0)
  const [inputValue, setInputValue] = useState(3)
 
  const incrementCounter = () => {
    setCounter(counter + 1);
  } ;
  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  const setCounterNumber = () => {
    setCounter(inputValue);
  }
  return (
    <>
      <Count counter={counter} />      
      <PlusButton setCounter ={setCounter} incrementCounter={incrementCounter}/>
      <MinusButton setCounter ={setCounter} decrementCounter={decrementCounter}/>
      <br/>
      <CounterInput inputValue = {inputValue} setInputValue = {setInputValue} setCounterNumber = {setCounterNumber}/>
    </>
  );
}

// Controlled Component
function CounterInput ({inputValue, setInputValue, setCounterNumber}) {
  //console.log(typeof(inputValue))
  return (
    <>
      <input type="number" value={inputValue} onChange={(event)=>setInputValue(Number(event.target.value))}  />
      <button onClick={setCounterNumber}>입력</button>
      {/* <button onClick={()=>setCounter(inputValue)}>입력</button> */}      
    </>
  )
}

function PlusButton({ setCounter, incrementCounter }) {
  return (<button onClick={incrementCounter}>+</button>);
}

function MinusButton({setCounter, decrementCounter}){
  return(<button onClick={decrementCounter}>-</button>);
}

function Count ({counter}) {

  return (
    <><div>counter: {counter}</div></>
  )
}

export default functionApp;

