import React, { useEffect } from 'react';

import OrderButton from '../burger/OrderButton';
import { generateItems, randomInterval } from '../../utils/burger';
import { useStore } from '../../store/useStore';
import { newBurger, addItem } from '../../store/actions';

export default function BurgerController() {
  const { dispatch } = useStore();

  const boundAddItem = (item) => dispatch(addItem(item));
  const boundNewBurger = () => dispatch(newBurger());

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
    <div>
      <OrderButton onClick={getBurger} />
    </div>
  );
}
