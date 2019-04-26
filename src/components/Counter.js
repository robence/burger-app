import React from 'react';
import { useStore } from '../store/useStore';

import { getItem } from '../util/burger';

export default function() {
  const { state, dispatch } = useStore();
  const inc = () => dispatch({ type: 'increment' });
  const dec = () => dispatch({ type: 'decrement' });
  const add = () => dispatch({ type: 'addItem', payload: { item: getItem() } });
  const getBurger = () =>
    Array(10)
      .fill()
      .map(() => add());

  return (
    <div>
      <div>{state.counter}</div>
      <button onClick={inc}>+ Increment</button>
      <button onClick={dec}>- Decrement</button>
      <button onClick={add}>Add Item</button>
      <button onClick={getBurger}>Give me a damn burger!</button>
    </div>
  );
}
