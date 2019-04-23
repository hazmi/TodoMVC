import React from 'react';

export const Item = ({ selected, children }) => (
  <li>
    <a href="/" className={selected ? 'selected' : ''}>
      {children}
    </a>
  </li>
);

export default Item;
