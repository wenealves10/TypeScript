import { Product } from './product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return correct properties', () => {
    // System under test
    const sut = createSut('Shirt', 99.87);
    expect(sut).toHaveProperty('name', 'Shirt');
    expect(sut.price).toBeCloseTo(99.87);
  });
});
