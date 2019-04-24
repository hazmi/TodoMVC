import React, { useReducer } from 'react';
import { Header } from './components/header';
import { Main } from './components/main';
import { Footer } from './components/footer';
import { reducer } from './reducer';

const initialState = [];

export const Todos = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = (value) => {
    dispatch({
      type: 'add',
      id: '_' + Math.random().toString(36).substr(2, 9),
      value
    });
  };

  const editTodo = (id, value) => {
    dispatch({ type: 'edit', id, value });
  };

  const removeTodo = (id) => {
    dispatch({ type: 'remove', id });
  };

  const toggleCompleted = (id, completed) => {
    dispatch({ type: 'toggleCompleted', id, completed });
  };

  const clearCompleted = (id) => {
    dispatch({ type: 'clearCompleted' });
  };

  const toggleAll = (completed) => {
    dispatch({ type: 'toggleAll', completed });
  };

  return (
    <section className="todoapp">
      <Header addTodo={addTodo} />
      <Main
        data={state}
        editTodo={editTodo}
        removeTodo={removeTodo}
        toggleCompleted={toggleCompleted}
        toggleAll={toggleAll}
      />
      <Footer
        data={state}
        clearCompleted={clearCompleted}
      />
    </section>
  );
};

export default Todos;
