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
      id: (new Date()).toString(),
      value
    });
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

  return (
    <section className="todoapp">
      <Header addTodo={addTodo} />
      <Main
        data={state}
        removeTodo={removeTodo}
        toggleCompleted={toggleCompleted}
      />
      <Footer
        data={state}
        clearCompleted={clearCompleted}
      />
    </section>
  );
};

export default Todos;
