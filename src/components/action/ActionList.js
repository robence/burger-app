import React from 'react';

import ActionButton from './ActionButton';

export default function ActionList({ items }) {
  const getActionButton = (item) => (
    <ActionButton primary={item.primary} onClick={item.onClick}>
      {item.title}
    </ActionButton>
  );

  return items.map(getActionButton);
}
