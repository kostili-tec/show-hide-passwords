import { createPassword } from "./createPassword";

export const createPasswords = () => {
  const container = document.createElement('div');
  container.classList.add('passwords-container');
  const passwords = [];

  for (let i = 1; i <= 12; i++) {
    passwords.push(createPassword(i));
  }

  container.append(...passwords);

  return container;
}