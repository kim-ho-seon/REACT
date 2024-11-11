import { Component, useState } from 'react'
import './App.css'

function functionApp() {
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)
  return (
    <>
      <div>counter1: {counter1}</div>
      <button
        onClick={() => {
          setCounter1 (counter1 +1);
        console.log(counter1 +1)}}>+</button>
      <button
        onClick={() => {
          setCounter1 (counter1 -1);
          console.log(counter1 -1)
        }}>-</button>

      <Count1 counter2={counter2} hello = {'hello'} array = {[1, 2, 3, "안녕"]}/>
      <button
        onClick={() => {
          setCounter2((prev) => prev + 3);
        }}>+</button>
      <button
        onClick={() => {
          setCounter2((prev) => prev - 3);
        }}>-</button>
    </>
  );
}

function Count1 ({counter2, hello, array}) {
  console.log("counter2", counter2)
  console.log("hello", hello)
  console.log("array", array)
  return (
    <><div>counter2: {counter2}</div></>
  )
}

// export default functionApp;

class classApp extends Component {
  state = { counter: 2};
  render () {
    return (
      <>
        <Count2 counter={this.state.counter}/>
        <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>+</button>
        <button onClick={() => this.setState({ counter: this.state.counter - 1 })}>-</button>
      </>
    )
  }
}

class Count2 extends Component {
  // constructor 코드를 작성하지 않아도 기본 constructor 함수가 작동하여 기입하지 않아도 O
  // constructor (props){super(props)} 

  render () {
    console.log("props", this.props)
    return <div>counter {this.props.counter}</div>
  }
}
export default classApp;
