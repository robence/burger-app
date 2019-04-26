import React, { useEffect } from 'react';
import { useStore } from '../../store/useStore';

import getItem from '../../utils/burger';
import OrderButton from '../burger/OrderButton';

export default function BurgerController() {
  const { state, dispatch } = useStore();

  const add = (item) => dispatch({ type: 'addItem', payload: { item } });
  const newBurger = () => dispatch({ type: 'newBurger' });

  const getBurger = () => {
    const length = Math.floor(Math.random() * 5) + 1;

    console.log(length);

    const items = [];
    while (items.length < length) {
      let item = getItem();
      while (items.includes(item)) {
        item = getItem();
      }
      items.push(item);
    }

    console.log(items);

    newBurger();
    add('Top');
    Array(length)
      .fill()
      .map((_, i) => add(items[i]));
    add('Bottom');
  };

  useEffect(() => {
    getBurger();
  }, []);

  return (
    <div>
      <OrderButton onClick={getBurger} />
    </div>
  );
}
