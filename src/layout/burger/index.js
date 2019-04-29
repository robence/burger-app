import React from 'react';
import styled from 'styled-components';
import BurgerControls from '../../components/service/BurgerControls';
import BurgerList from '../../components/burger/BurgerList';
import BurgerMenu from '../../components/wrapper/BurgerDisplay';
import FlexContainer from '../../components/wrapper/FlexColumnCenter';

export default function BurgerLayout() {
  const Div = styled.div`
    width: 100%;
    height: inherit;
  `;

  return (
    <Div>
      <BurgerControls />
      <BurgerMenu>
        <FlexContainer>
          <BurgerList />
        </FlexContainer>
      </BurgerMenu>
    </Div>
  );
}
