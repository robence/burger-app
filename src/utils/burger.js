const burgerItems = ['Salad', 'Bacon', 'Egg', 'Cheese', 'Meat'];

export function randomInterval(end, start = 0) {
  return Math.floor(Math.random() * end) + start;
}

export function getItem() {
  const index = randomInterval(burgerItems.length);
  return burgerItems[index];
}

export function generateItems(length) {
  const items = [];
  while (items.length < length) {
    let item = getItem();
    while (items.includes(item)) {
      item = getItem();
    }
    items.push(item);
  }

  return items;
}
