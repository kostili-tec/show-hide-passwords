import { createSvg, SVGIds } from "./createSvg";

export const createPassword = (number) => {
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('password-container');

  const labelTextInput = document.createElement('label');
  labelTextInput.textContent = `${number}.`;
  labelTextInput.setAttribute('for', `input-${number}`);
  labelTextInput.classList.add('label');

  const textInput = document.createElement('input');
  textInput.type = 'password';
  textInput.classList.add('text-input');
  textInput.id = `input-${number}`;

  const showHideContainer = document.createElement('div');
  showHideContainer.classList.add('show-hide-toggle');

  const labelCheckbox = document.createElement('label');
  labelCheckbox.setAttribute('for', `checkbox-${number}`);

  const checkBoxInput = document.createElement('input');
  checkBoxInput.type = 'checkbox';
  checkBoxInput.id = `checkbox-${number}`;
  checkBoxInput.classList.add('checkbox-input');

  const svg = createSvg('class', textInput, checkBoxInput);

  labelCheckbox.append(svg);

  showHideContainer.append(checkBoxInput, labelCheckbox);

  mainContainer.append(labelTextInput, textInput, showHideContainer);
  return mainContainer;
}
