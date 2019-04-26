const burgerItems = ['Salad', 'Bacon', 'Egg', 'Cheese', 'Meat'];

const getItem = () => {
  const i = Math.round(Math.random() * (burgerItems.length - 1));
  return burgerItems[i];
};

export default getItem;
