export function add(a: unknown, b: unknown): number | string {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(10, 25));
console.log(add('W', 'A'));

type Person = { type: 'person'; name: string; age: number };
type Animal = { type: 'animal'; feature: string; age: number };

type PersonOrAnimal = Person | Animal;

export class Student implements Person {
  type: 'person' = 'person';
  constructor(public name: string, public age: number) {}
}

export function showName(obj: PersonOrAnimal): void {
  //if ('name' in obj) console.log(obj.name, obj.age);
  //if (obj instanceof Student) console.log(obj.name, obj.age);
  switch (obj.type) {
    case 'person':
      console.log(obj.name, obj.age);
      return;
    case 'animal':
      console.log(obj.feature, obj.age);
      return;
  }
}

const personStudent = new Student('Wene Alves', 19);
showName(personStudent);

showName({ type: 'animal', feature: 'Dog', age: 19 });
