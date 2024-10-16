import { Component, useState } from 'react';
import './App.css'

// 함수형 컴포넌트
// function App() {
//   const [counter1, setcounter1] = useState(0)
//   const [counter2, setcounter2] = useState(0)
//   return (
//     <>
//       <div>counter1 : {counter1}</div>
//       <button onClick={() => {setcounter1(counter1 + 3)}}>+</button>
//       <button onClick={() => {setcounter1(counter1 - 3)}}>-</button>
//       <br/>
//       <div>counter2 : {counter2}</div>
//       <button onClick={() => {setcounter2((prev) => prev + 1)}}>+</button>
//       <button onClick={() => {setcounter2((prev) => prev - 1)}}>-</button>
//     </>
//   )
// }

// 클래스형 컴포넌트
class App extends Component {
  state = { counter: 1}
  render(){
    return(
      <>
        <div>counter : {this.state.counter}</div>
        <button onClick={()=>this.setState({ counter: this.state.counter + 1})}>+</button>
        <button onClick={()=>this.setState({ counter: this.state.counter - 1})}>-</button>
      </>
    )
  }
}

export default App
