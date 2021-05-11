function addOrConcat(
  paramA: string | number | boolean,
  paramB: string | number | boolean,
): number | string {
  if (typeof paramA === 'number' && typeof paramB === 'number')
    return paramA + paramB;
  return `${paramA}${paramB}`;
}

console.log(addOrConcat(10, 30));
console.log(addOrConcat('10', '30'));
console.log(addOrConcat('10', 30));
console.log(addOrConcat(10, '30'));
console.log(addOrConcat(true, true));
