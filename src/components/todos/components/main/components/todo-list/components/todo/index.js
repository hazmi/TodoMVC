import React, { useState, useRef } from 'react';
import './index.scss';

export const Todo = ({
  completed,
  children,
  isLast
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  const handleEdit = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current.focus();
    }, 200);
  };

  const handleSubmit = () => {
    setIsEditing(false);
  };

  return (
    <li
      className={[
        "todo",
        isEditing ? "todo_editing" : null,
        isLast ? "todo_last" : null,
        completed ? "todo_completed" : null,
      ].join(' ')}
    >
      <div className="todo__view">
        <input className="todo__toggle" type="checkbox" defaultChecked={completed} />
        <label
          className="todo__label"
          onDoubleClick={handleEdit}
        >
          {children}
        </label>
        <button className="todo__destroy"/>
      </div>
      <input
        ref={inputRef}
        type="text"
        className="todo__edit"
        onBlur={handleSubmit}
      />
    </li>
  );
};

export default Todo;
