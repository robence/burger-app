import React from 'react';
import BurgerListItem from './BurgerListItem';

export default function BurgerList({ burgerItems }) {
  const getItem = (item) => (
    <BurgerListItem item={item} key={`${item}-${Math.random().toString()}`} />
  );

  return burgerItems.map(getItem);
}
