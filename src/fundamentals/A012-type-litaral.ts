let x = 10 // eslint-disable-line
x = 0b1010;
console.log(x);

const y = 10;
let a = 100 as const; // eslint-disable-line
console.log(a);

const person = {
  name: 'Wene' as const,
  age: 18,
};

console.log(person);

export function multColores(cor: 'blue' | 'red' | 'green'): string {
  return cor;
}

console.log(multColores('blue'));
console.log(multColores('green'));

// Module mode
export default 1;
