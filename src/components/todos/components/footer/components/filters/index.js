import React from 'react';
import { Item } from './components/filter-item';

export const Filters = ({ filterActive }) => (
  <ul className="filters">
    <Item
      to="#/"
      selected={(filterActive === 'all')}
    >
      All
    </Item>
    <Item
      to="#/active"
      selected={(filterActive === 'active')}
    >
      Active
    </Item>
    <Item
      to="#/completed"
      selected={(filterActive === 'completed')}
    >
      Completed
    </Item>
  </ul>
);

export default Filters;
