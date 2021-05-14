// Recommended
// Condicional assertion
const body = document.querySelector('body');
if (body) body.style.background = 'red';

// Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMlELEMENT
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'My name is Wene Alves';
input.focus();

// No Recommended
//Non-null assertion
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

// Up type
const body4 = (document.querySelector('body') as unknown) as number;
body4;
