import React from 'react';
import { TodoCount } from './components/todo-count';
import { Filters } from './components/filters';

export const Footer = () => {
  return (
    <footer className="footer">
      <TodoCount count={3} />
      <Filters />
      <button className="clear-completed">Clear Completed</button>
    </footer>
  );
};

export default Footer;
