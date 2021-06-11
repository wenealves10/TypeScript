type colorsObj = typeof colorObj;
type colorsKey = keyof colorsObj;

const colorObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
};

export function tradutorCor(color: colorsKey, colors: colorsObj) {
  return colors[color];
}

console.log(tradutorCor('vermelho', colorObj)); // result is red

console.log(tradutorCor('verde', colorObj)); // result is green

// Github is https://github.com/wenealves10
