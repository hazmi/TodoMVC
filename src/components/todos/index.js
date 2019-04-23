import React, { useState } from 'react';
import { Header } from './components/header';
import { Main } from './components/main';
import { Footer } from './components/footer';

const dummyData = [
  { id: 1, completed: false, label: 'Lorem' },
  { id: 2, completed: false, label: 'Ipsum' },
  { id: 3, completed: false, label: 'Dolor' },
  { id: 4, completed: true, label: 'Sit Amet' },
];

export const Todos = () => {
  const [data, setData] = useState(dummyData);
  return (
    <section className="todoapp">
      <Header />
      <Main data={data} />
      <Footer data={data} />
    </section>
  );
};

export default Todos;
