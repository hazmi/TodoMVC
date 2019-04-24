import React from 'react';
import { TodoCount } from './components/todo-count';
import { Filters } from './components/filters';

export const Footer = ({ data = [], clearCompleted }) => {
  const count = data.reduce((total, item) => item.completed ? total : total + 1, 0);

  return (
    <footer className="footer">
      <TodoCount count={count} />
      <Filters />
      <button
        onClick={clearCompleted}
        className="clear-completed"
      >
        Clear Completed
      </button>
    </footer>
  );
};

export default Footer;
