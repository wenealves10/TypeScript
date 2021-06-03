export class Person {
  constructor(
    private name: string,
    private lastName: string,
    private age: number,
    protected _cpf: string,
  ) {
    this.cpf = _cpf;
  }

  set cpf(valueCpf: string) {
    console.log('Calling the Setter');
    this._cpf = valueCpf;
  }

  get cpf(): string {
    console.log('Calling the Getter');
    return this._cpf.replace(/\D/g, '');
  }
}

const personOne = new Person('Ismael', 'Albert', 18, '222.222.222-22');
console.log(personOne);
console.log(personOne.cpf);
personOne.cpf = '333.356.663-58';
console.log(personOne.cpf);
