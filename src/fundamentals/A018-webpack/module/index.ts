import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGES = 'show-error-message';

export function checkFormEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'The field cannot be empty ');
  });
}

export function showErrorMessage(
  input: HTMLInputElement,
  message: string,
): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.innerHTML = message;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

export function hideErrorMessages(form: HTMLFormElement): void {
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
    .forEach((element) => element.classList.remove(SHOW_ERROR_MESSAGES));
}

export function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessage(input, 'Email invalid ');
}

export function checkEqualPasswords(
  password: HTMLInputElement,
  password2: HTMLInputElement,
): void {
  if (password.value !== password2.value) {
    showErrorMessage(password, 'Passwords do not match ');
    showErrorMessage(password2, 'Passwords do not match ');
  }
}

export function shouldSendForm(form: HTMLFormElement): boolean {
  let send = true;
  form
    .querySelectorAll(`.${SHOW_ERROR_MESSAGES}`)
    .forEach(() => (send = false));

  return send;
}
