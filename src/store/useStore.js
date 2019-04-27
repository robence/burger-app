import React, { createContext, useReducer, useContext } from 'react';
import { reducer1, reducer2 } from './reducers';

import { userInitialState, userActions } from './userActions';

const initialState = {
  ...userInitialState,
};

const StoreContext = createContext(initialState);

// this will act as a map of actions that will trigger state mutations
const Actions = {
  ...userActions,
};

const reducers = [reducer1, reducer2];
// the reducer is called whenever a dispatch action is made.
// the action.type is a string which maps to a function in Actions.
// We apply the update to existing state, and return a new copy of state.
const rootReducer2 = (state, action) => {
  const act = Actions[action.type];
  const update = act(state, action.payload);
  return { ...state, ...update };
};

const rootReducer = (state, action) => {
  // const update = reduceReducers(reducers);
  const update = reducers.reduce(
    (previousState, reducer) => reducer(previousState, action),
    initialState,
  );
  return { ...state, ...update };
};

function reduceReducers(...reducers) {
  return (previous, current) =>
    reducers.reduce((p, r) => r(p, current), previous);
}

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
