// TodoList.js
import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ todos, toggleComplete, showCompleted }) => {
  return (
    <ul>
      {/* props로 전달받은 showCompleted에 따라 완료된 Todo가 표시 여부가 결정되도록 코드를 수정하세요. */}
      {/* 힌트: filter */}
      {todos
      .filter((todo)=>(showCompleted ? true : !todo.completed))
      .map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
      ))}
    </ul>
  );
};

export default TodoList;
