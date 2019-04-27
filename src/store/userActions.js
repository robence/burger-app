import { addItem, newBurger } from './reducers';

export const userInitialState = {
  burgerItems: [],
};

export const userActions = {
  ADD_ITEM: addItem,
  NEW_BURGER: newBurger,
};
