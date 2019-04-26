import React from 'react';
import { useStore } from '../../store/useStore';

export default function UserContainer() {
  const { state, dispatch } = useStore();

  const login = () => dispatch({ type: 'login' });
  const logout = () => dispatch({ type: 'logout' });

  const handleClick = () => (state.user.loggedIn ? logout() : login());

  return (
    <div>
      <button onClick={handleClick}>
        {state.user.loggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}
