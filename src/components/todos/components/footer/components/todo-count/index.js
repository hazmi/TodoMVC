import React from 'react';

const pluralize = (count, word) => count === 1 ? word : `${word}s`;

export const TodoCount = ({ count }) => (
  <span className="todo-count">
    <strong>{count}</strong>
    {` ${pluralize(count, 'item')} left `}
  </span>
);

export default TodoCount;
