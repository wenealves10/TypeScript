function decoratorProperty(classPrototype: any, name: string | symbol): any {
  let valueProperty: any;
  return {
    get: () => valueProperty,
    set: (value: any) => {
      if (typeof value === 'string') {
        valueProperty = value.split('').reverse().join('');
        return;
      }

      valueProperty = value;
    },
  };
}

export class Person {
  @decoratorProperty
  firstname: string;
  @decoratorProperty
  lastname: string;
  @decoratorProperty
  age: number;

  constructor(firstname: string, lastname: string, age: number) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

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
console.log(person.fullName);
