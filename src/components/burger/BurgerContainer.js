import React from 'react';
import BurgerList from './BurgerList';
import { useStore } from '../../store/useStore';

export default function BurgerContainerComponent() {
  const { state } = useStore();

  return <BurgerList burgerItems={state.burgerItems} />;
}
