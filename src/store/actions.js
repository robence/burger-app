export const ADD_ITEM = 'ADD_ITEM';
export const NEW_BURGER = 'NEW_BURGER';
export const HELLO_THERE = 'HELLO_THERE';
export const THERE_HELLO = 'THERE_HELLO';
export const MY_PLEASURE = 'MY_PLEASURE';
export const PLEASURE_MINE = 'PLEASURE_MINE';

export const addItem = (item) => ({ type: ADD_ITEM, payload: { item } });
export const newBurger = () => ({ type: NEW_BURGER });

export const helloThere = () => ({ type: HELLO_THERE });
export const thereHello = () => ({ type: THERE_HELLO });
export const myPleasure = () => ({ type: MY_PLEASURE });
export const pleasureMine = () => ({ type: PLEASURE_MINE });
