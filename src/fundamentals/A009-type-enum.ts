enum Steps {
  STEPONE,
  STEPTWO,
}

enum Steps {
  ThreeSteps = 'Three 3',
  FourSteps = 100,
  FiveSteps,
}

function stepsEnum(title: number): void {
  console.log(Steps[title]);
}

stepsEnum(0);

console.log(Steps);
console.log(Steps.STEPONE);
console.log(Steps[0]);
