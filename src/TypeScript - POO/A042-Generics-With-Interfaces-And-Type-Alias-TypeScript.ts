interface PersonProtocol<T, U> {
  name: T;
  lastName: T;
  age: U;
}

type PersonProtocol2<T = string, U = number> = {
  name: T;
  lastName: T;
  age: U;
};

const student1: PersonProtocol<string, number> = {
  name: 'Wene',
  lastName: 'Alves',
  age: 19,
};

const student2: PersonProtocol2 = {
  name: 'Wene',
  lastName: 'Oliveira',
  age: 19,
};

const student3: PersonProtocol2<number, string> = {
  name: 19,
  lastName: 20,
  age: '20',
};

console.log(student1, student2, student3);
