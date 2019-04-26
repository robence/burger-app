import React from 'react';

import BurgerLayout from './burger';

export default function Layout() {
  const style = {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'lightgrey',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={style}>
      <BurgerLayout />
    </div>
  );
}
