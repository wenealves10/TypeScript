/* eslint-disable @typescript-eslint/no-namespace */
namespace MyNameSpace {
  export const nameOfNameSpace = 'Wene';

  export class PersonNameSpace {
    constructor(public name: string) {}
  }

  const personNameSpace = new PersonNameSpace('Wene');

  export namespace OtherNameSpace {
    export const nameOfNameSpace = 'Wene Alves';
  }
}
