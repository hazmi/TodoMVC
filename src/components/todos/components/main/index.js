import React from 'react';
import { TodoList } from './components/todo-list';
import { ToggleAll } from './components/toggle-all';

export const Main = ({ data = [], removeTodo }) => (
  <section className="main">
    <ToggleAll />
    <TodoList
      data={data}
      removeTodo={removeTodo}
    />
  </section>
);

export default Main;
