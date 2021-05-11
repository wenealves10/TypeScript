// Type Tuple
const dataClient: readonly [number, string] = [1, 'Wene'];
const dataClient2: [number, string, string] = [1, 'Wene', 'Alves'];
const dataClient3: [number, string[], string] = [
  1,
  ['Alves', 'Oliveira'],
  'Alves',
];

const dataClient4: [number, string, string?] = [1, 'Wene'];
const dataClient5: [number, string, ...string[]] = [1, 'Wene'];

// Type ReadOnly Array
const dataClient6: readonly string[] = ['Wene', 'Alves'];
const dataClient7: ReadonlyArray<string> = ['Oliveira', 'Alves'];

console.log(dataClient);
console.log(dataClient2);
console.log(dataClient3);
console.log(dataClient4);
console.log(dataClient5);
console.log(dataClient6);
console.log(dataClient7);
