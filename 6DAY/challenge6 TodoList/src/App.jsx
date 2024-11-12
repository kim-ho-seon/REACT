// App.js
import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: '할 일 1', completed: false },
    { id: 2, text: '할 일 2', completed: false },
    { id: 3, text: '할 일 3', completed: true },
  ]);

  // 완료된 할 일의 표시 여부를 관리하는 상태 showCompleted를 추가하세요.
  const [showCompleted, setShowCompleted] = useState();

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // 버튼을 클릭했을 때 showCompleted 상태가 변경되는 함수 toggleShowCompleted를 작성하세요.
  const toggleShowCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  return (
    <div className="container">
      <h1>Todo List 조건부 렌더링 연습</h1>
      <AddTodo addTodo={addTodo} />
      {/* showCompleted 상태에 따라 '모든 할 일 보기'와 '완료된 할 일 제거하기'로 버튼이 변경되도록 코드를 수정하세요. */}
      <button className="btn_completed" onClick={toggleShowCompleted}>
        {showCompleted ? '완료된 할 일 숨기기' : '모든 할 일 보기'}
      </button>
      {/* TodoList에 showCompleted 상태를 props로 전달하세요. */}
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        showCompleted={showCompleted}
      />
    </div>
  );
};

export default App;
