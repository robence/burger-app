export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const NEW_BURGER = 'NEW_BURGER';

export const addItem = (item) => ({ type: ADD_ITEM, payload: { item } });
export const removeItem = (item) => ({ type: REMOVE_ITEM, payload: { item } });
export const newBurger = () => ({ type: NEW_BURGER });
