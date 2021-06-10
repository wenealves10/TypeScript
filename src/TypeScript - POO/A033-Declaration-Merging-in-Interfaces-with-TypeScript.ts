interface Person {
  name: string;
}

interface Person {
  age?: number;
  lastName: string;
  readonly address: string[];
}

export const person: Person = {
  name: 'Wene',
  lastName: 'Alves',
  age: 19,
  address: ['Rua Tancredo Neves'],
};

person.address.push('Av. tancredo neves');

console.log(person);
