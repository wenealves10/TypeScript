export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function sum<T>(...args: T[]): number {
  const result = args.reduce((total, next) => {
    if (isNumber(total) && isNumber(next)) {
      return total + next;
    }
    return total;
  }, 0);

  return result;
}

console.log(sum(1, 2, 3, 54));
console.log(sum(...['aa', 'bb', 'cc', 1, 5, 6]));
console.log(sum('a', 'b', 'c'));
