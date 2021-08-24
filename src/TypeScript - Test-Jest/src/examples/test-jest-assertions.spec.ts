describe('Primitives Values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10);
    expect(number).toEqual(10);
    expect(number).not.toBeNull();
    expect(number).toBeTruthy();
  });

  it('should test jest assertions part two', () => {
    const number = 10;
    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThan(11);
    expect(number).toBeCloseTo(10.001);
    expect(number).toBeCloseTo(9.996);

    expect(number).toHaveProperty('toString');
  });
});

describe('Objects', () => {
  it('should test jest assertions with objects', () => {
    const person = {
      name: 'Wene',
      age: 19,
    };

    const personCopy = { ...person };
    expect(person).not.toBe(personCopy);
    expect(person).toEqual(personCopy);
    expect(person).toHaveProperty('age');
    expect(person).toHaveProperty('age', 19);
  });

  it('should test jest assertions with objects part two', () => {
    const person = {
      name: 'Wene',
      age: 19,
    };

    expect(person.name).toBe('Wene');
    expect(person).not.toHaveProperty('lastName');
  });
});
