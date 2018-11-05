/* eslint-disable-next-line */
export const doubleNum = num => {
  const isNumber = ifValueIsNumber(num);

  if (isNumber) {
    const isDoubleNum = ifNumberIsDoubleNum(num);

    return isDoubleNum ? num : num *= 2;
  } else {
    throw (`${num} is not a number`);
  }
};

const ifValueIsNumber = num => isFinite(item) && typeof num === 'number';

const getNumberLength = num => num.toString().length;

const getDigits = (num, length, isLeftPart) => 
  isLeftPart 
    ? Math.floor(num / (10 ** (length / 2))) 
    : num % (10 ** (length / 2));

const ifNumberIsDoubleNum = function (num) {
  const length = getNumberLength(num);
  
  if (length % 2 === 0) {
    const leftPart = getDigits(num, length, true);
    const righgPart = getDigits(num, length, false);

    return leftPart === righgPart;
  } else {
    return false;
  }
};
