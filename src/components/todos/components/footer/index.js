import React from 'react';
import { TodoCount } from './components/todo-count';
import { Filters } from './components/filters';

export const Footer = () => (
  <footer className="footer">
    <TodoCount />
    <Filters />
    <button className="clear-completed">Clear Completed</button>
  </footer>
);

export default Footer;
