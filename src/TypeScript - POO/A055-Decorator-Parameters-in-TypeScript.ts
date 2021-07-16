function decoratorParameters(
  classPrototype: any,
  nameMethod: string | symbol,
  index: number,
): any {
  console.log(classPrototype);
  console.log(nameMethod);
  console.log(index);
}

export class Person {
  firstname: string;
  lastname: string;
  age: number;

  constructor(
    @decoratorParameters firstname: string,
    @decoratorParameters lastname: string,
    @decoratorParameters age: number,
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  method(@decoratorParameters message: string): string {
    return `${this.firstname} ${this.lastname} ${message}`;
  }

  get fullName(): string {
    return `${this.firstname} ${this.lastname}`;
  }

  set fullName(value: string) {
    const word = value.split(/\s+/g);
    const firstname = word.shift();
    if (!firstname) return;
    this.firstname = firstname;
    this.lastname = word.join(' ');
  }
}

// const person = new Person('Wene', 'Alves', 19);
// const method = person.method('Bom Marujo Sou');
// console.log(method);
