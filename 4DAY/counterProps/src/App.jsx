import { Component, useState } from 'react';
import './App.css'

// // 함수형 컴포넌트
// function App() {
//   const [counter, setcounter] = useState(0)
//   return (
//     <>
//       {/* props 키와 값으로 내려준다 */}
//       <Count
//         counter={counter}
//         hello={'hello'}
//         array={[1, 2, 3, '안녕하세요']}
//       />
//       <button onClick={() => { setcounter((prev) => prev + 1) }}>+</button>
//       <button onClick={() => { setcounter((prev) => prev - 1) }}>-</button>
//     </>
//   )
// }

// // props를 구조분해 할당으로 받아온다
// function Count({ counter, hello, array }) {
//   // console.log('props', props) 객체형태로 묶인다
//   console.log('counter', counter)
//   console.log('hello', hello)
//   console.log('array', array)
//   return (
//     <div>counter : {counter}</div>
//   )
// }

// 클래스형 컴포넌트
class App extends Component {
  state = { counter: 1}
  render(){
    return(
      <>
        <Count counter ={this.state.counter}/>
        <button onClick={()=>this.setState({ counter: this.state.counter + 1})}>+</button>
        <button onClick={()=>this.setState({ counter: this.state.counter - 1})}>-</button>
      </>
    )
  }
}

class Count extends Component {
  // 기본constructor가 실행되어 작동 가능
  // constructor(props){
  //   super(props);
  // } 
  render(){
    console.log('props:', this.props)
    return <div>counter : {this.props.counter}</div>;
    
  }
}
export default App
