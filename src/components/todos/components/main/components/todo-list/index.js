import React from 'react';
import { Todo } from './components/todo';
import './index.scss';

export const TodoList = () => (
  <ul className="todo-list">
    <Todo completed>Test 1</Todo>
    <Todo>Test 2</Todo>
    <Todo isLast>Test 3</Todo>
  </ul>
);

export default TodoList;
