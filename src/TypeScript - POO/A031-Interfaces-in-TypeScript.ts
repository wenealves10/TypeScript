interface TypeName {
  name: string;
}

interface TypeLastName {
  lastName: string;
}

interface TypeFullName {
  fullName: () => string;
}

interface TypePerson extends TypeName, TypeLastName, TypeFullName {}

export class Person implements TypePerson {
  constructor(public name: string, public lastName: string) {}

  fullName(): string {
    return `${this.name} ${this.lastName}`;
  }
}

const person = new Person('Wene', 'Alves de Oliveira');
console.log(person.fullName());
