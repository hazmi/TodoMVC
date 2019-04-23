import React from 'react';
import { TodoCount } from './components/todo-count';
import { Filters } from './components/filters';

export const Footer = () => (
  <footer className="footer">
    <TodoCount />
    <Filters />
  </footer>
);

export default Footer;
