import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todo, setTodo] = useState([
    {
      id: Number(new Date()),
      content: "안녕하세요",
    },
  ]);
  
  return (
    <>
    <TodoInput setTodo={setTodo}/>
    <TodoList todo={todo} setTodo={setTodo}/>
    </>
  );
}


const TodoInput = ({setTodo}) => {
  const inputRef = useRef(null)
  const addTodo = () =>{
    const newTodo ={
      id: Number(new Date()),
      content: inputRef.current.value
    };
    setTodo((prev) => [...prev, newTodo]);
  };
  
  return (
    <>
      <input ref={inputRef} />
      <button onClick={addTodo}>추가</button>
    </>
  );
}
const TodoList = ({todo, setTodo}) => {
  return(
    <ul>
    {todo.map((el) => (
      <Todo key={el.id} todo={el} setTodo={setTodo}/>
      // todo={el} 왜 이걸로 받아오는지
      ))}
  </ul>
  );
}

const Todo = ({todo, setTodo}) => {
  return (
    <li>{todo.content}
      <button onClick={() => {
        setTodo(prev => prev.filter(el => el.id !== todo.id))
      }}>삭제</button>
    </li>
  );
}
export default App;
