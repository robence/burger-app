import React from 'react';
import styled from 'styled-components';
import BurgerControls from '../../components/service/BurgerControls';
import BurgerList from '../../components/burger/BurgerList';

export default function BurgerLayout() {
  const Div = styled.div`
    width: 100%;
    height: 500px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 5px;
  `;

  return (
    <Div>
      <BurgerControls />
      <BurgerList />
    </Div>
  );
}
