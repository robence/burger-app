import React from 'react';
import styled from 'styled-components';

import BurgerLayout from './BurgerLayout';

export default function LayoutComponent() {
  const Div = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    background-color: lightgrey;
    box-sizing: border-box;
    padding: 30px;
    display: flex;
    align-items: start;
  `;

  return (
    <Div>
      <BurgerLayout />
    </Div>
  );
}
