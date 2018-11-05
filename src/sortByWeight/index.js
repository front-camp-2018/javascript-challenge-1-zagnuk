/* eslint-disable-next-line */
export const sortByWeight = arr => {
  return arr.sort((a, b) => getSum(a) - getSum(b));
};

const getSum = n => {
  let sum = 0;
  const num = n.toString();

  for (let i = num.length; i > 0; i--) {
    sum += parseInt(num.slice(i - 1, i));
  }

  return sum;
};