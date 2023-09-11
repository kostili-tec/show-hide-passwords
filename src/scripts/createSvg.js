import sprite from '../assets/sprite.svg';

export const SVGIds = {
  eyeOff: 'eye-off',
  eyeOn: 'eye-show',
};

const inputTypes = {
  password: 'password',
  text: 'text'
}

export const createSvg = (classSvg, textInput, checkBoxInput) => {
  let useId = '';
  const svgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgEl.classList.add('icon-svg', ...classSvg.split(' '));
  const useEl = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  useEl.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `${sprite}#${SVGIds.eyeOff}`);
  svgEl.appendChild(useEl);
  svgEl.addEventListener('click', () => {
    const getTypeInput = textInput.getAttribute('type');
    let newTypeInput = '';    
    if (getTypeInput === inputTypes.password) {
      newTypeInput = inputTypes.text;
      useId = SVGIds.eyeOn;
      checkBoxInput.setAttribute('checked', false);
    }
    if (getTypeInput === inputTypes.text) {
      newTypeInput = inputTypes.password;
      useId = SVGIds.eyeOff;
      checkBoxInput.setAttribute('checked', true); 
    }
    textInput.setAttribute('type', newTypeInput);
    useEl.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `${sprite}#${useId}`);
  })
  return svgEl;
};
