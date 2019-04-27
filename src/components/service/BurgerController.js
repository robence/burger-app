import React, { useEffect } from 'react';

import OrderButton from '../burger/OrderButton';
import { generateItems, randomInterval } from '../../utils/burger';
import { useStore } from '../../store/useStore';
import {
  newBurger,
  addItem,
  helloThere,
  thereHello,
  myPleasure,
  pleasureMine,
} from '../../store/actions';

export default function BurgerController() {
  const { state, dispatch } = useStore();

  console.log(state);
  const boundAddItem = (item) => dispatch(addItem(item));
  const boundNewBurger = () => dispatch(newBurger());

  const getBurger = () => {
    boundNewBurger();

    const burgerSize = randomInterval(5, 1);
    const burgerItems = ['Top'].concat(generateItems(burgerSize), ['Bottom']);
    burgerItems.forEach((item) => boundAddItem(item));
  };

  const testReducers = () => {
    dispatch(helloThere());
    dispatch(thereHello());
    dispatch(myPleasure());
    dispatch(pleasureMine());
  };

  useEffect(() => {
    // getBurger();
    testReducers();
  }, []);

  return (
    <div>
      <OrderButton onClick={getBurger} />
    </div>
  );
}
