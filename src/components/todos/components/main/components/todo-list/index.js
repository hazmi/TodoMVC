import React from 'react';
import { Todo } from './components/todo';

export const TodoList = () => (
  <ul className="todo-list">
    <Todo checked>Test 1</Todo>
    <Todo>Test 2</Todo>
    <Todo>Test 3</Todo>
  </ul>
);

export default TodoList;
