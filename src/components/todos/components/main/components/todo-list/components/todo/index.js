import React from 'react';
import './index.scss';

export const Todo = ({ checked, children }) => (
  <li className="todo">
    <div className="todo__view">
      <input className="todo__toggle" type="checkbox" defaultChecked={checked} />
      <label className="todo__label">{children}</label>
      <button className="todo__destroy"/>
    </div>
    <input type="text" className="todo__edit" />
  </li>
);

export default Todo;
