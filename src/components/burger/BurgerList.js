import React from 'react';
import BurgerItem from './BurgerItem';
import { useStore } from '../../store/useStore';

export default function BurgerList() {
  const { state } = useStore();

  const getContent = () => {
    return state.burgerItems.map((x) => (
      <BurgerItem item={x} key={`${x}-${Math.random().toString()}`} />
    ));
  };

  return getContent();
}
