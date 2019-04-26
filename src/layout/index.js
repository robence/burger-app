import React from 'react';

import Counter from '../components/Counter';
import FoodContainer from '../components/food/FoodContainer';
import UserContainer from '../components/service-desk/UserContainer';
import DisplayComponent from '../components/service-desk/DisplayComponent';

export default function Layout() {
  return (
    <div>
      <UserContainer />
      <DisplayComponent />
      <Counter />
      <FoodContainer />
    </div>
  );
}
