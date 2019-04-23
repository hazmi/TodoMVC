import React from 'react';

export const Todo = ({ checked, children }) => (
  <li className="todo">
    <div className="view">
      <input className="toggle" type="checkbox" checked={checked} />
      <label>{children}</label>
      <button className="destroy"/>
    </div>
  </li>
);

export default Todo;
