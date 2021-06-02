export function funServer(this: Date, name: string, age: number): void {
  console.log(this);
  console.log(name);
  console.log(age);
}

funServer.call(new Date(), 'Wene Alves', 19);
funServer.apply(new Date(), ['Wene Alves', 19]);
