import React from 'react';
import styled from 'styled-components';
import ActionContainer from '../../components/action/ActionContainer';
import BurgerList from '../../components/burger/BurgerList';
import BurgerContainer from '../../components/wrapper/BurgerContainer';
import FlexContainer from '../../components/wrapper/FlexContainer';

export default function BurgerLayout() {
  const Div = styled.div`
    width: 100%;
    height: inherit;
  `;

  return (
    <Div>
      <ActionContainer />
      <BurgerContainer>
        <FlexContainer>
          <BurgerList />
        </FlexContainer>
      </BurgerContainer>
    </Div>
  );
}
