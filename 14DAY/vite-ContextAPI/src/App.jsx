import { useState } from 'react'
import React from 'react';
import './App.css'
import { useCounter } from './context/counterContext'

function App() {
  const [counter, setCounter] = useCounter()
  console.log('App component rendered')
  return (
    <>
      <div> counter : {counter}</div>
      <button onClick={()=>{
        setCounter(prev => prev + 1)
      }}>+</button>
      <button onClick={()=>{
        setCounter(prev => prev - 1)
      }}>-</button>
    </>
  )
}

export default App;
