import React from 'react';

export const Filters = () => (
  <ul className="filters">
    <li>
      <a href="/" className="selected">
        All
      </a>
    </li>
    <li>
      <a href="/active">
        Active
      </a>
    </li>
    <li>
      <a href="/completed">
        Completed
      </a>
    </li>
  </ul>
);

export default Filters;
