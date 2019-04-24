import React from 'react';

export const Item = ({
  selected,
  children,
  to
}) => (
  <li>
    <a href={to} className={selected ? 'selected' : ''}>
      {children}
    </a>
  </li>
);

export default Item;
