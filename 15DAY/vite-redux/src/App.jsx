import './App.css'
import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import $thunk from 'redux-thunk'
// redux-thunk에서 내보내는것이 여러개라서 {} 를 사용해 구조분해
// import {thunk} from 'redux-thunk'

const increment1 = {
  type: "increment1"
}

const decrement1 = {
  type: "decrement1"
}

const increment2 = {
  type: "increment2"
}

const decrement2 = {
  type: "decrement2"
}

const counter1Reducer = (state = 4, action) => {
  switch (action.type) {
    case 'increment1':
      return state + 1
    case 'decrement1':
      return state - 1
    default:
      return state
  }
}

const counter2Reducer = (state = 1, action) => {
  switch (action.type) {
    case 'increment2':
      return state + 1
    case 'decrement2':
      return state - 1
    default:
      return state
  }
}

const rootReducer = combineReducers({ counter1Reducer, counter2Reducer })

export const store = legacy_createStore(rootReducer, applyMiddleware($thunk))

function App() {
  console.log("App component re-rendered"); // 렌더링 시점 확인
  const counter1 = useSelector(state => state.counter1Reducer)
  const counter2 = useSelector(state => state.counter2Reducer)
  const dispatch = useDispatch()
  // dispatch(increment1);
  return (
    <>
      <div>Counter: {counter1}</div>
      <button onClick={() => dispatch((dispatch) => {
        setTimeout(() => {
          dispatch(increment1)
        }, 1000)
      })}>+</button>
      <button onClick={() => dispatch((dispatch) => {
        setTimeout(() => {
          dispatch(increment1)
        }, 1000)
      })}>-</button>
      <div>Counter: {counter2}</div>
      <button onClick={() => dispatch(increment2)}>+</button>
      <button onClick={() => dispatch(decrement2)}>-</button>
    </>
  );
}

export default App;
