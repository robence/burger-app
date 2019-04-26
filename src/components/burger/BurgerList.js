import React from 'react';

import BurgerItem from './BurgerItem';
import { useStore } from '../../store/useStore';

export default function BurgerList() {
  const { state } = useStore();

  const getContent = () => {
    return state.burgerItems.map((x, i) => <BurgerItem item={x} key={i} />);
  };

  const style = {
    border: '1px solid black',
    height: '80%',
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  };
  return <div style={style}>{getContent()}</div>;
}
