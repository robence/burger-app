export const ADD_ITEM = 'ADD_ITEM';
export const NEW_BURGER = 'NEW_BURGER';

export function addItem(item) {
  return { type: ADD_ITEM, payload: { item } };
}

export function newBurger() {
  return { type: NEW_BURGER };
}
