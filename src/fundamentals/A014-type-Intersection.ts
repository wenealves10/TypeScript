type HasAFirstName = { firstname: string };
type HasALastName = { lastname: string };
type HasAnAge = { age: number };
type Person = HasAFirstName & HasALastName & HasAnAge;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';
type AE = 'A' | 'E';

type Intersection = AB & AC & AD & AE;
// A

const person: Person = {
  firstname: 'Wene',
  lastname: 'Oliveira',
  age: 19,
};

console.log(person);
// { firstname: 'Wene', lastname: 'Oliveira', age: 19 }

// Module Mode
export { person };
