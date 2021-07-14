@decorator
export class Animal {
  constructor(public name: string, public age: number) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    name: string;
    age: number;

    constructor(...args: any[]) {
      super(...args);
      this.name = this.revertString(args[0]);
      this.age = args[1];
    }

    revertString(value: string): string {
      return value.split('').reverse().join('');
    }
  };
}

// const AnimalDecorated = decorator(Animal);
const animal = new Animal('Wene', 19);
console.log(animal);
