function decoratorMethod(
  classPrototype: any,
  nameMethod: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor | void {
  console.log(classPrototype);
  console.log(nameMethod);
  console.log(descriptor);

  return {
    value: function (...args: string[]) {
      return args[0].toUpperCase();
    },
  };
}

export class Person {
  firstname: string;
  lastname: string;
  age: number;

  constructor(firstname: string, lastname: string, age: number) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  @decoratorMethod
  method(message: string): string {
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

const person = new Person('Wene', 'Alves', 19);
const method = person.method('Bom Marujo Sou');
console.log(method);
