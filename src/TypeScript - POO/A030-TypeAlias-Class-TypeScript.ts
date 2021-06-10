/*export abstract class TypePerson {
  protected abstract name: string;
  protected abstract lastName: string;
  protected abstract fullName(): string;
}*/

/*type TypePerson = {
  name: string;
  lastName: string;
  fullName: () => string;
};*/

type TypeName = {
  name: string;
};

type TypeLastName = {
  lastName: string;
};

type TypeFullName = {
  fullName: () => string;
};

export class Person implements TypeName, TypeLastName, TypeFullName {
  constructor(public name: string, public lastName: string) {}

  fullName(): string {
    return `${this.name} ${this.lastName}`;
  }
}

const personOne = new Person('Wene', 'Alves de Oliveira');
console.log(personOne.fullName());
