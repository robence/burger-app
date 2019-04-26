const burgerItems = [
  'Salad',
  'Bacon',
  'Ham',
  'Egg',
  'Cheese',
  'Onion',
  'BBQ',
  'Pork',
  'Chicken',
];

export const getItem = () => {
  const i = Math.round(Math.random() * (burgerItems.length - 1));
  return burgerItems[i];
};
