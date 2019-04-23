import React from 'react';
import './index.scss';

export const Header = () => (
  <header className="header">
    <h1>todos</h1>
    <input className="header__new-todo" placeholder="What needs to be done?" />
  </header>
);

export default Header;
