export function togetherObjects<T, U>(object1: T, object2: U): T & U {
  // return {...object1, ...object2}
  return Object.assign({}, object1, object2);
}

const keys1 = { key1: 'Value 1' };
const keys2 = { key2: 'Value 2' };
const together = togetherObjects(keys1, keys2);
console.log(together);
