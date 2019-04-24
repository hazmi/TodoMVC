import React, { useState, useReducer, useEffect } from 'react';
import { Router } from 'director/build/director';
import { Header } from './components/header';
import { Main } from './components/main';
import { Footer } from './components/footer';
import { reducer } from './reducer';

export const Todos = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [filterActive, setFilterActive] = useState('all');

  useEffect(() => {
    const router = Router({
      '/': () => setFilterActive('all'),
      '/active': () => setFilterActive('active'),
      '/completed': () => setFilterActive('completed')
    });
    router.init('/');
  }, true);

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

  const filteredTodos = todos.filter((todo) => {
    switch (filterActive) {
      case 'active':
        return !todo.completed;
      case 'completed':
        return todo.completed;
      default:
        return true;
    }
  });

  return (
    <section className="todoapp">
      <Header addTodo={addTodo} />
      <Main
        data={filteredTodos}
        editTodo={editTodo}
        removeTodo={removeTodo}
        toggleCompleted={toggleCompleted}
        toggleAll={toggleAll}
      />
      <Footer
        data={todos}
        clearCompleted={clearCompleted}
        filterActive={filterActive}
      />
    </section>
  );
};

export default Todos;
