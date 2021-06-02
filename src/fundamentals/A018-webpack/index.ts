import {
  checkEmail,
  checkEqualPasswords,
  checkFormEmptyFields,
  hideErrorMessages,
  shouldSendForm,
} from './module';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

const submitEventFn = (event: Event) => {
  const target = event.target as HTMLFormElement;
  event.preventDefault();
  hideErrorMessages(target);
  checkFormEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkEqualPasswords(password, password2);
  if (shouldSendForm(target)) console.log('Form was sent ');
};

form.addEventListener('submit', submitEventFn);
