/* eslint-disable @typescript-eslint/no-namespace */
namespace MyNameSpace {
  export const nameOfNameSpace = 'Wene';

  export class PersonNameSpace {
    constructor(public name: string) {}
  }

  const personNameSpace = new PersonNameSpace('Wene');
  console.log(personNameSpace);

  export namespace OtherNameSpace {
    export const nameOfNameSpace = 'Wene Alves';
  }
}

const personNameSpace = new MyNameSpace.PersonNameSpace('Wene Export');
console.log(personNameSpace);
console.log(MyNameSpace.nameOfNameSpace);
console.log(MyNameSpace.OtherNameSpace.nameOfNameSpace);

export default 1;
