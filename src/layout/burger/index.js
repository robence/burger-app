import React from 'react';

import BurgerController from '../../components/service/BurgerController';
import BurgerList from '../../components/burger/BurgerList';

export default function BurgerLayout() {
  const style = {
    minWidth: '300px',
    minHeight: '350px',
    width: '95%',
    height: '95%',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
  };

  return (
    <div style={style}>
      <BurgerController />
      <BurgerList />
    </div>
  );
}
