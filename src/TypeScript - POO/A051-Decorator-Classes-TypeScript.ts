function decoratorInvert<T extends new (...args: any[]) => any>(target: T): T {
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
      return value.split('').reverse().join('');
    }
  };
}

@decoratorInvert
export class Animal {
  constructor(public name: string, public age: number) {
    console.log('Calling Classes');
  }
}
