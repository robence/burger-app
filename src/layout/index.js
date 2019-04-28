import React from 'react';
import styled from 'styled-components';

import BurgerLayout from './burger';

export default function Layout() {
  const Div = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    background-color: lightgrey;
    box-sizing: border-box;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: start;
  `;

  return (
    <Div>
      <BurgerLayout />
    </Div>
  );
}
