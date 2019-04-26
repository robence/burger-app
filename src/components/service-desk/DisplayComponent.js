import React from 'react';

import { useStore } from '../../store/useStore';

export default function DisplayComponent() {
  const { state } = useStore();

  return (
    <div>
      <div>{state.user.loggedIn ? 'Logged In' : 'Logged out'}</div>
      <div>Count: {state.count}</div>
      <div>Burger Size: {state.burgerItems.length}</div>
    </div>
  );
}
