function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

noReturn('Wene', 'Alves', 'Oliveira');

const person = {
  firstName: 'Wene',
  lastName: 'Oliveira',
  showData(): void {
    console.log(`Name: ${this.firstName} ${this.lastName}`);
  },
};

person.showData();

export { person };
