import React from 'react';
import { TodoList } from './components/todo-list';
import { ToggleAll } from './components/toggle-all';

export const Main = () => (
  <section className="main">
    <ToggleAll />
    <TodoList />
  </section>
);

export default Main;
