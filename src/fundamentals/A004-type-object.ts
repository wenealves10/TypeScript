// const objectA: Record<string, unknown> = {
//   keyA: 'Value A',
//   keyB: 'Value B',
// };

const objectA: {
  keyA: string;
  readonly keyB: string;
  keyC?: string;
  [key: string]: unknown;
} = {
  keyA: 'Value A',
  keyB: 'Value B',
};

objectA.keyA = 'Hello keyA';
objectA.keyC = 'Hello keyC';
objectA.keyD = 'Hello keyD';

console.log(objectA);
