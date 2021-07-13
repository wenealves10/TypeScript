const objectOne: Record<string, string | number> = {
  firstname: 'Wene Alves',
  lastname: 'Oliveira',
  age: 19,
};

console.log(objectOne);

type PersonProtocol = {
  firstname?: string;
  lastname?: string;
  age?: number;
};

// Required
type PersonRequired = Required<PersonProtocol>;

// Partial
type PersonPartial = Partial<PersonRequired>;

//ReadonLy
type PersonReadonly = Readonly<PersonRequired>;

// Pick
type PersonPick = Pick<PersonRequired, 'firstname' | 'lastname'>;

const objectTwo: PersonRequired = {
  firstname: 'Wene',
  lastname: 'Alves',
  age: 19,
};

console.log(objectTwo);

// Exclude and Extract
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

type TypeExclude = Exclude<ABC, CDE>;
type TypeExtract = Extract<ABC, CDE>;

// Exemplos

type AccountMongo = {
  _id: string;
  firstname: string;
  lastname: string;
  age: number;
};

type AccountAPI = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'asasasa-sasas-saassa',
  firstname: 'Wene',
  lastname: 'Oliveira',
  age: 19,
};

function mapAccount(accountMongo: AccountMongo): AccountAPI {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountAPI = mapAccount(accountMongo);
console.log('API:');
console.log(accountAPI);

export default 1;
