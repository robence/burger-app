import React from 'react';

import styled from 'styled-components';

const BurgerItem = ({ item }) => {
  const Img = styled.img`
    /* height: 100%; */
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
};

export default BurgerItem;
