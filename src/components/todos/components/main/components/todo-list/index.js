import React from 'react';
import { Todo } from './components/todo';
import './index.scss';

export const TodoList = ({ data = [], removeTodo }) => (
  <ul className="todo-list">
    {data.map((item) => (
      <Todo
        key={item.id}
        completed={item.completed}
        handleRemove={() => removeTodo(item.id)}
      >
        {item.value}
      </Todo>
    ))}
  </ul>
);

export default TodoList;
