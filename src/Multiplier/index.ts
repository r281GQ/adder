type MultiplierFunction = (a: number, b: number) => number | null;

import order from 'lodash.orderby';

const multiplier: MultiplierFunction = (a, b) => {
  order([{ id: 4 }, { id: 5 }], 'id');

  if (a === 2) return null;

  return a * b;
};

export default multiplier;
