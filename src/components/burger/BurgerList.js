import React from 'react';
import BurgerItem from './BurgerItem';
import { useStore } from '../../store/useStore';

export default function BurgerList() {
  const { state } = useStore();

  const getItem = (item, key) => <BurgerItem item={item} key={key} />;

  return state.burgerItems.map(getItem);
}
