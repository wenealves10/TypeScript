type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...arg: number[]): number;
};

const adder: Adder = (x: number, y?: number, ...args: number[]): number => {
  if (args.length > 0)
    return args.reduce((current, next) => current + next, 0) + x + (y || 0);
  return x + (y || 0);
};

console.log(adder(1));
console.log(adder(1, 10));
console.log(adder(1, 10, 10));
