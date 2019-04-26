export const userInitialState = {
  burgerItems: [],
};

export const userActions = {
  addItem: ({ burgerItems }, { item }) => {
    return { burgerItems: [...burgerItems, item] };
  },
  newBurger: () => ({ burgerItems: [] }),
};
