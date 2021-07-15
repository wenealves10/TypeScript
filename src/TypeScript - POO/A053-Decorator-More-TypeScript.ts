interface IConstructor {
  new (...args: any[]): any;
}

function decoratorInvert(params1: string) {
  return function (target: IConstructor) {
    console.log('Calling Decorator: ', target);

    return class extends target {
      name: string;
      age: number;

      constructor(...args: any[]) {
        super(...args);
        this.name = this.revertString(args[0]);
        this.age = args[1];
      }

      revertString(value: string): string {
        return `${params1} ${value.split('').reverse().join('')}`;
      }
    };
  };
}

function otherDecorator(params1: string) {
  return function (target: IConstructor) {
    console.log(`${params1} Other Decorator`);
    return target;
  };
}

@otherDecorator('The new')
@decoratorInvert('Name Invert:')
export class Animal {
  constructor(public name: string, public age: number) {
    console.log('Calling Classes');
  }
}

const animal = new Animal('Wene', 19);
console.log(animal.name);
