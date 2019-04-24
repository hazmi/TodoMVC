import React from 'react';
import { TodoList } from './components/todo-list';
import { ToggleAll } from './components/toggle-all';

export const Main = ({
  data = [],
  removeTodo,
  toggleCompleted,
  toggleAll
}) => (
  <section className="main">
    <ToggleAll
      toggleAll={toggleAll}
    />
    <TodoList
      data={data}
      removeTodo={removeTodo}
      toggleCompleted={toggleCompleted}
    />
  </section>
);

export default Main;
