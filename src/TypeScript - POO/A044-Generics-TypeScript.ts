// export class Person<T, U> {
//   constructor(public name: T, public age: U) {}
// }

// const person1 = new Person('Wene', 19);

// const person2 = new Person(['Wene', 'Alves'], 19);

export class Stack<T> {
  private count = 0;
  private elements: { [key: number]: T } = {};

  push(element: T): void {
    this.elements[this.count] = element;
    this.count++;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;
    this.count--;
    const element = this.elements[this.count];
    delete this.elements[this.count];
    return element;
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  size(): number {
    return this.count;
  }

  show(): void {
    for (const key in this.elements) {
      console.log(this.elements[key]);
    }
  }
}

// const stack = new Stack();
// stack.push(1);
const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.show();
console.log('Size:', stack.size());
while (!stack.isEmpty()) {
  stack.pop();
}
console.log('Size: ', stack.size());
