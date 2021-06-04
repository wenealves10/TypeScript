export class Person {
  static ageStandard = 18;
  static cpfStandard = '000.000.000-00';
  constructor(
    public name: string,
    public lastName: string,
    public age: number,
    public cpf: string,
  ) {}

  static createPerson(name: string, lastName: string): Person {
    return new Person(name, lastName, Person.ageStandard, Person.cpfStandard);
  }

  showData(): void {
    console.log(
      `CPF STANDARD: ${Person.cpfStandard} and AGE STANDARD: ${Person.ageStandard}`,
    );
  }
}

const personOne = new Person('Wene', 'Alves', 18, '111.111.111-11');
const personTwo = Person.createPerson('Valney', 'Filho');
console.log(personOne);

console.log(personTwo);
console.log(Person.ageStandard);
console.log(Person.cpfStandard);
personOne.showData();
