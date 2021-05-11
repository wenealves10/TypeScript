// Array<T> or T[]

export function multiplies(...args: Array<number>): number {
  return args.reduce((acc, value) => acc * value, 1);
}

export function concatString(...args: string[]): string {
  return args.reduce((ac, value) => ac + value);
}

export function toUpper(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

console.log(multiplies(1, 23, 45));
console.log(concatString('Hello', 'World'));
console.log(toUpper('a', 'b', 'c'));
