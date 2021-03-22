/* eslint-disable */
let names: string = 'Wene Alves';
let age: number = 19;
let color: boolean = true;
let symbols: symbol = Symbol("What?");
// let big: bigint = 10n;

// Arrays
let numberArray: Array<number> = [1,2,3,4,5];
let numberArray2: number[] = [1,2,3,4,5];
let stringArray: Array<string> = ['a','b','c','d','e'];
let stringArray2: string[] = ['a','b','c','d','e'];
let booleanArray: Array<boolean> = [true, false, true, false];
let booleanArray2: boolean[] = [true, false, true, false];
// etc...

// Objects
let person: {name: string, age: number, color?: boolean} = {
  name: 'Wene Alves',
  age: 19,
  color: true
};
console.log(`I am ${person.name}
 I am ${person.age} years old
 I am from Brazil
 I live in Maranhão
 I live with my parents and my sisters
 I really like to code
 I am a programmer
 I have a favorite color: ${person.color && 'Yes'}
 ${person.color && 'My favorite color is purple'}`);
// etc...

// Functions
function sum(x: number, y: number) {
  return y + x;
}

function sum2(x: number, y: number): number {
  return x + y;
}

const sum3: (x: number, y: number) => number = (x, y) => x + y;
