import { Component, useState } from 'react'
import './App.css'

// 언마운트 확인
function App () { 
  const [showCounter, setShowCounter] = useState(false)
  return (
    <>
      {showCounter && <Counter />}
      <hr/>
      <button onClick={() => setShowCounter((prev) => !prev)}>show?</button>
    </>
  );
}

// constructor 인스턴스 생성 시 사용
// 리랜더링 마운트 확인
class Counter extends Component { 
  constructor(){ 
    super();
    this.state = { counter: 1 }
    console.log("constructor");
  }

  componentDidMount(){
    console.log("DidMount")
  }
  componentDidUpdate(){
    console.log("DidUpdate")
  }
  componentWillUnmount(){
    console.log("WillUnmount")
  }
  render() {
    console.log("render")

    return (
      <>
        <div>counter : {this.state.counter}</div>
        <button onClick={() => this.setState({ counter: this.state.counter + 1 })}
          >
            +1
        </button>
      </>
    );
  }
}
export default App;
