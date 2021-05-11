type Age = number;
type Person = {
  firstName: string;
  lastName: string;
  age: Age;
  salt: number;
  corFavorite?: string;
};

type CorRGB = 'RED' | 'GREEN' | 'BLUE';
type CorCMYK = 'ORANGE' | 'YELLOW' | 'PINK';

type CorFavorite = CorCMYK | CorRGB;

const person: Person = {
  firstName: 'Wene',
  lastName: 'Oliveira',
  age: 18,
  salt: 1_000_000,
};

export function setCorFavorite(person: Person, cor: CorFavorite): Person {
  return { ...person, corFavorite: cor };
}

console.log(setCorFavorite(person, 'YELLOW'));
//{firstName: 'Wene',lastName: 'Oliveira', age: 18, salt: 1000000, corFavorite: 'YELLOW' }
console.log(person);
//{ firstName: 'Wene', lastName: 'Oliveira', age: 18, salt: 1000000 }
