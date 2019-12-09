import checkEvent from './checkEvent';

const checkInput = (inputType, submitButton, smallTags) => {
  for (let i = 0; i < inputType.length; i += 1) {
    inputType[i].addEventListener('blur', (event) => {
      if (i === 0) {
        checkEvent(event, inputType[0], submitButton, smallTags[0]);
      }
      if (i === 1) {
        checkEvent(event, inputType[1], submitButton, smallTags[1]);
      }
      if (i === 2) {
        checkEvent(event, inputType[2], submitButton, smallTags[2]);
      }
      if (i === 3) {
        checkEvent(event, inputType[3], submitButton, smallTags[3]);
      }
    });
  }
};

export default checkInput;
