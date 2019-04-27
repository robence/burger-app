import React, { useEffect } from 'react';

import OrderButton from '../burger/OrderButton';
import { generateItems, randomInterval } from '../../utils/burger';
import { useStore } from '../../store/useStore';
import { newBurger, addItem, removeItem } from '../../store/actions';

export default function BurgerController() {
  const { state, dispatch } = useStore();

  const boundNewBurger = () => dispatch(newBurger());
  const boundAddItem = (item) => dispatch(addItem(item));
  const boundRemoveItem = (item) => dispatch(removeItem(item));

  const removeRandomItem = () => {
    const index = randomInterval(state.burgerItems.length);
    const item = state.burgerItems[index];
    boundRemoveItem(item);
  };

  const getBurger = () => {
    boundNewBurger();

    const burgerSize = randomInterval(5, 1);
    const burgerItems = ['Top'].concat(generateItems(burgerSize), ['Bottom']);
    burgerItems.forEach((item) => boundAddItem(item));
  };

  useEffect(() => {
    getBurger();
  }, []);

  return (
    <div
      style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%' }}
    >
      <OrderButton onClick={getBurger} title="Give me a damn burger!" />
      <OrderButton onClick={removeRandomItem} title="Bite!" />
    </div>
  );
}
