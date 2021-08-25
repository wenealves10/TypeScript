import { EnterpriseCustomer, IndividualCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstname, lastname and cpf', () => {
    // System under test
    const sut = createIndividualCustomer('Wene', 'Alves', '222.000');
    expect(sut).toHaveProperty('firstName', 'Wene');
    expect(sut).toHaveProperty('lastName', 'Alves');
    expect(sut).toHaveProperty('cpf', '222.000');
  });

  it('should have methods to get name and idn for individual customers', () => {
    // System under test
    const sut = createIndividualCustomer('Wene', 'Alves', '222.000');
    expect(sut.getName()).toBe('Wene Alves');
    expect(sut.getIDN()).toBe('222.000');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    // System under test
    const sut = createEnterpriseCustomer('WebTech', '5564.777');
    expect(sut).toHaveProperty('name', 'WebTech');
    expect(sut).toHaveProperty('cnpj', '5564.777');
  });

  it('should have methods to get name and idn for enterprise customers', () => {
    // System under test
    const sut = createEnterpriseCustomer('WebTech', '222.000');
    expect(sut.getName()).toBe('WebTech');
    expect(sut.getIDN()).toBe('222.000');
  });
});
