import React, { createContext, useReducer, useContext } from 'react';
import { userReducer } from './reducers';

const initialState = {
  burgerItems: [],
};

const StoreContext = createContext(initialState);

const reducers = [userReducer];

// the reducer is called whenever a dispatch action is made.
// the action.type is a string which maps to a function in Actions.
// We apply the update to existing state, and return a new copy of state.
const rootReducer = (state, action) => {
  const update = reducers.reduce(
    (previousState, reducer) => reducer(previousState, action),
    state,
  );
  return { ...state, ...update };
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const { state, dispatch } = useContext(StoreContext);
  return { state, dispatch };
};
