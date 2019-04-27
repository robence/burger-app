export const addItem = ({ burgerItems }, { item }) => ({
  burgerItems: [...burgerItems, item],
});

export const newBurger = () => ({ burgerItems: [] });
