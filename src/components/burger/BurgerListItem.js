import React from 'react';

import styled from 'styled-components';

import Top from './images/Top.png';
import Bottom from './images/Bottom.png';
import Salad from './images/Salad.png';
import Bacon from './images/Bacon.png';
import Egg from './images/Egg.png';
import Cheese from './images/Cheese.png';
import Meat from './images/Meat.png';

const imagesByTitle = {
  Top,
  Bottom,
  Salad,
  Bacon,
  Egg,
  Cheese,
  Meat,
};

export default function BurgerListItem({ item }) {
  const ImgComp = imagesByTitle[item];

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

  return <Img src={ImgComp} alt="logo" />;
}
