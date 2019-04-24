import React from 'react';

export const ToggleAll = ({ toggleAll }) => (
  <div>
    <input
      id="toggle-all"
      className="toggle-all"
      type="checkbox"
      onChange={(e) => toggleAll(e.target.checked)}
    />
    <label htmlFor="toggle-all" />
  </div>
);

export default ToggleAll;
