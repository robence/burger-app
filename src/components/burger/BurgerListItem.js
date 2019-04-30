import React from 'react';

import styled from 'styled-components';

export default function BurgerListItem({ item }) {
  const Img = styled.img`
    width: 100%;
    max-width: 100px;
    max-height: 100px;
    animation: fadeIn 1000ms;

    @keyframes fadeIn {
      from {
        opacity: 0.4;
      }
      to {
        opacity: 1;
      }
    }
  `;

  return <Img src={`${item}.png`} alt="logo" />;
}
