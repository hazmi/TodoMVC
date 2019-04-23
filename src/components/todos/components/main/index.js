import React from 'react';
import { TodoList } from './components/todo-list';
import { ToggleAll } from './components/toggle-all';

export const Main = ({ data = [] }) => (
  <section className="main">
    <ToggleAll />
    <TodoList data={data} />
  </section>
);

export default Main;
