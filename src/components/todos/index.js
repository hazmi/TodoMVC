import React from 'react';
import { Header } from './components/header';
import { Main } from './components/main';
import { Footer } from './components/footer';
import 'todomvc-app-css/index.css';

export const Todos = () => (
  <section className="todoapp">
    <Header />
    <Main />
    <Footer />
  </section>
);

export default Todos;
