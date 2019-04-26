export const userInitialState = {
  user: { loggedIn: false },
  burgerItems: [],
};

export const userActions = {
  login: () => ({ user: { loggedIn: true } }),
  logout: () => ({ user: { loggedIn: false } }),
  addItem: ({ burgerItems }, { item }) => {
    return { burgerItems: [...burgerItems, item] };
  },
};
