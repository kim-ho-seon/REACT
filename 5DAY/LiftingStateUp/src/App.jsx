import { Component, useState } from 'react'
import './App.css'

function functionApp() {
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)
  const incrementCounter2 = () => {
    setCounter2((prev) => prev + 3);
  };
  const decrementCounter2 = () => {
    setCounter2((prev) => prev - 3);
  };

  return (
    <>
      <div>counter1: {counter1}</div>
      <button
        onClick={() => {
          setCounter1(counter1 + 1);
          console.log(counter1 + 1)
        }}>+</button>
      <button
        onClick={() => {
          setCounter1(counter1 - 1);
          console.log(counter1 - 1)
        }}>-</button>

      {/* <Count1 counter2={counter2} hello = {'hello'} array = {[1, 2, 3, "안녕"]}/> */}
      <Count1 counter2={counter2} />
      <PlusButton2 setCounter2 ={setCounter2} incrementCounter2={incrementCounter2}/>
      <MinusButton2 setCounter2 ={setCounter2} decrementCounter2={decrementCounter2}/>
    </>
  );
}

function PlusButton2({ setCounter2, incrementCounter2 }) {
  return (<button onClick={incrementCounter2}>+</button>);
}

function MinusButton2({setCounter2, decrementCounter2}){
  return(<button onClick={decrementCounter2}>-</button>);
}

function Count1 ({counter2}) {
// function Count1 ({counter2, hello, array}) {
  // console.log("counter2", counter2)
  // console.log("hello", hello)
  // console.log("array", array)
  return (
    <><div>counter2: {counter2}</div></>
  )
}

export default functionApp;

class classApp extends Component {
  state = { counter : 1};

  incrementCounter1= () => {
    this.setState({counter: this.state.counter + 1});
  };
  decrementCounter1= () => {
    this.setState({counter: this.state.counter - 1});
  };
  
  render () {
    return (
      <>
        <Count2 counter={this.state.counter}/>
        <PlusButton1 incrementCounter1 = {this.incrementCounter1}/>
        <MinusButton1 decrementCounter1 = {this.decrementCounter1}/>
      </>
    )
  }
}

class PlusButton1 extends Component{
  render(){
    return (
      <button onClick={this.props.incrementCounter1}>+</button>
    )
  }
}

class MinusButton1 extends Component{
  render(){
    return (
      <button onClick={this.props.decrementCounter1}>-</button>
    )
  }
}

class Count2 extends Component {
  // constructor 코드를 작성하지 않아도 기본 constructor 함수가 작동하여 기입하지 않아도 O
  // constructor (props){super(props)} 

  render () {
    console.log("props", this.props)
    return <div>counter : {this.props.counter}</div>
  }
}
// export default classApp;
