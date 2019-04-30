import React from 'react';
import BurgerListItem from './BurgerListItem';

export default function BurgerList({ burgerItems }) {
  const getItem = (item, key) => <BurgerListItem item={item} key={key} />;

  return burgerItems.map(getItem);
}
