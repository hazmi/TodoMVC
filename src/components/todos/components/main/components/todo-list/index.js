import React from 'react';
import { Todo } from './components/todo';
import './index.scss';

export const TodoList = ({ data = [] }) => (
  <ul className="todo-list">
    {data.map((item) => (
      <Todo key={item.id} completed={item.completed}>
        {item.label}
      </Todo>
    ))}
  </ul>
);

export default TodoList;
