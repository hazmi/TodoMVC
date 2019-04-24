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

  return (
    <section className="todoapp">
      <Header addTodo={addTodo} />
      <Main data={state} />
      <Footer data={state} />
    </section>
  );
};

export default Todos;
