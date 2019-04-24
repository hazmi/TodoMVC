import React from 'react';
import { TodoList } from './components/todo-list';
import { ToggleAll } from './components/toggle-all';

export const Main = ({
  data = [],
  removeTodo,
  toggleCompleted
}) => (
  <section className="main">
    <ToggleAll />
    <TodoList
      data={data}
      removeTodo={removeTodo}
      toggleCompleted={toggleCompleted}
    />
  </section>
);

export default Main;
