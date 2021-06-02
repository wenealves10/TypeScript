export class BusinessCompany {
  public readonly name: string;
  private readonly contributors: Contributor[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addCollaborate(collaborate: Contributor): void {
    this.contributors.push(collaborate);
  }

  showCollaborates(): void {
    for (const collaborate of this.contributors) {
      console.log(collaborate);
    }
  }
}

export class Contributor {
  constructor(
    public readonly name: string,
    public readonly lastName: string,
    public readonly age: number,
    protected readonly cpf: string,
  ) {}
}

const companyOne = new BusinessCompany('WebTech', '641421794773578');

const employeeOne = new Contributor('Wene', 'Alves', 19, '20212012120');
const employeeTwo = new Contributor('Ismael', 'Albert', 18, '20212012121');
const employeeThree = new Contributor('Valney', 'Alves', 18, '20212012126');

companyOne.addCollaborate(employeeOne);
companyOne.addCollaborate(employeeTwo);
companyOne.addCollaborate(employeeThree);

companyOne.showCollaborates();
console.log(companyOne);
