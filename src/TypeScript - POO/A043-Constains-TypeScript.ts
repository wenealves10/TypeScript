type GetObject = <O, K extends keyof O>(object: O, key: K) => O[K];

const getKeys: GetObject = (object, key) => object[key];

const animal = {
  color: 'Pink',
  age: 20,
  parents: ['Father', 'Mother', 'Sister'],
};

const parents = getKeys(animal, 'parents');
const animalAge = getKeys(animal, 'age');
console.log(parents, animalAge);
