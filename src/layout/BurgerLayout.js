import React from 'react';

import Card from './wrapper/Card';
import FlexContainer from './wrapper/FlexContainer';
import BurgerContainer from './containers/BurgerContainer';
import ActionContainer from './containers/ActionContainer';
import BurgerContainerComponent from '../components/burger/BurgerContainer';
import ActionContainerComponent from '../components/action/ActionContainer';

export default function BurgerLayout() {
  return (
    <Card>
      <ActionContainer>
        <ActionContainerComponent />
      </ActionContainer>
      <BurgerContainer>
        <FlexContainer center column>
          <BurgerContainerComponent />
        </FlexContainer>
      </BurgerContainer>
    </Card>
  );
}
