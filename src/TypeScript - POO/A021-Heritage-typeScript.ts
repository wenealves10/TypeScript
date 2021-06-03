export class Person {
  constructor(
    public name: string,
    public lastName: string,
    private age: number,
    protected cpf: string,
  ) {}

  getAge(): number {
    return this.age;
  }

  getCPF(): string {
    return this.cpf;
  }

  getNameComplete(): string {
    return this.name + ' ' + this.lastName;
  }
}

export class Student extends Person {
  constructor(
    name: string,
    lastName: string,
    age: number,
    cpf: string,
    public classStudent: string,
  ) {
    super(name, lastName, age, cpf);
  }

  getNameComplete(): string {
    return `Student Name: ${super.getNameComplete()}\nClass: ${
      this.classStudent
    }`;
  }
}

export class Client extends Person {
  getNameComplete(): string {
    return `Client Name: ${this.name} ${this.lastName}`;
  }
}

const personOne = new Person('Ismael', 'Albert', 18, '222.222.222-22');
const studentOne = new Student('Wene', 'Alves', 19, '000.000.000-00', 'T34');
const clientOne = new Client('Valney', 'Filho', 18, '111.111.111-11');

console.log(
  `${studentOne.getNameComplete()}\nAge: ${studentOne.getAge()}\nCPF: ${studentOne.getCPF()}`,
);

console.log('-----------------------------------------------------');

console.log(
  `${clientOne.getNameComplete()}\nAge: ${clientOne.getAge()}\nCPF: ${clientOne.getCPF()}`,
);

console.log('-----------------------------------------------------');

console.log(
  `Name: ${personOne.getNameComplete()}\nAge: ${personOne.getAge()}\nCPF: ${personOne.getCPF()}`,
);
