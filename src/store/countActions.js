export const countInitialState = {
  count: 0,
};

export const countActions = {
  increment: ({ count }) => ({ count: count + 1 }),
  decrement: ({ count }) => ({ count: count - 1 }),
};
