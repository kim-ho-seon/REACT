import { useState } from 'react'
import './App.css'

// CRUD : Create, Read, Update, Delete 

function App() {
  const [todoList, setTodoList] = useState([
    { id: 0, content: "밥 먹기" },
    { id: 1, content: "코딩 공부하기" },
    { id: 2, content: "잠 자기" }
  ])

  return (
    <>
      <h1> TODO LIST </h1>
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <hr />
      <TodoInput todoList={todoList} setTodoList={setTodoList} />

    </>
  )
}

function TodoInput({ todoList, setTodoList }) {
  const [inputValue, setInputValue] = useState('');
  // console.log(inputValue); 

  return (
    <>
      <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
      <button onClick={() => {
        const newTodo = { id: Number(new Date()), content: inputValue }
        // console.log(newTodo)
        const newTodoList = [...todoList, newTodo];
        setTodoList(newTodoList)
        setInputValue('')
      }}>추가하기</button>
    </>
  )
}

function TodoList({ todoList, setTodoList }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} setTodoList={setTodoList} />
      ))}
    </ul>
  );
}

function Todo({ todo, setTodoList }) {
  const [inputValue, setInputValue] = useState('');
  console.log(todo.content, inputValue)
  return (
    <li >
      {todo.content}
      <input 
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={() => {
        setTodoList(prev =>
          prev.map((el) =>
            el.id === todo.id ? { ...el, content: inputValue } : el))
      }}>수정</button>
      <button onClick={() => {
        setTodoList(prev => {
          return prev.filter(el => el.id !== todo.id)
        })
      }}>삭제</button>
    </li>
  )
}
export default App
