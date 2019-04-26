import React from 'react';

import FoodComponent from './FoodComponent';
import { useStore } from '../../store/useStore';

export default function FoodContainer() {
  const { state } = useStore();

  const getContent = () => {
    return state.burgerItems.map((x, i) => <FoodComponent item={x} key={i} />);
  };

  return getContent();
}
