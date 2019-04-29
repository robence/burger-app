import React from 'react';
import styled from 'styled-components';

export default function BurgerDisplayComponent({ children }) {
  const BurgerDisplay = styled.div`
    border: 2px solid lightgrey;
    border-radius: 5px;
    margin-top: 15px;
    height: 400px;
  `;

  return <BurgerDisplay>{children}</BurgerDisplay>;
}
