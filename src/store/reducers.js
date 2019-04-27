import { ADD_ITEM, REMOVE_ITEM, NEW_BURGER } from './actions';

export const userReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { burgerItems: [...state.burgerItems, action.payload.item] };
    case NEW_BURGER:
      return { burgerItems: [] };
    case REMOVE_ITEM:
      return {
        burgerItems: state.burgerItems.filter(
          (item) => item !== action.payload.item,
        ),
      };
    default:
      return state;
  }
};
