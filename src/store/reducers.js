import {
  HELLO_THERE,
  THERE_HELLO,
  MY_PLEASURE,
  PLEASURE_MINE,
} from './actions';

export const addItem = ({ burgerItems }, { item }) => ({
  burgerItems: [...burgerItems, item],
});

export const newBurger = () => ({ burgerItems: [] });

export const reducer1 = (previousState, action) => {
  switch (action.type) {
    case HELLO_THERE:
      return { ...previousState, hello: 'there' };
    case THERE_HELLO:
      return { ...previousState, there: 'hello' };
    default:
      return previousState;
  }
};

export const reducer2 = (previousState, action) => {
  switch (action.type) {
    case MY_PLEASURE:
      return { ...previousState, my: 'pleasure' };
    case PLEASURE_MINE:
      return { ...previousState, pleasure: 'mine' };
    default:
      return previousState;
  }
};
