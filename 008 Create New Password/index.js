const result = document.querySelector('.result');
const buttonClipboard = document.querySelector('.btn-clipboard');
const buttonGenerate = document.querySelector('.btn-generate');
const lengthEl = document.querySelector('.length');
const uppercaseEl = document.querySelector('.uppercase');
const lowercaseEl = document.querySelector('.lowercase');
const numbersEl = document.querySelector('.numbers');
const symbolsEl = document.querySelector('.symbols');

buttonGenerate.addEventListener('click', () => {
  let newLength = lengthEl.value;
  const checkedUpp = uppercaseEl.checked;
  const checkedLow = lowercaseEl.checked;
  const checkedNum = numbersEl.checked;
  const checkedSym = symbolsEl.checked;

  result.innerHTML = generatePassword(
    checkedUpp,
    checkedLow,
    checkedNum,
    checkedSym,
    newLength
  );
});

const generatePassword = (upper, lower, number, symbol, length) => {
  let newPassword = '';
  const typesCount = upper + lower + number + symbol;
  const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  if (typesCount === 0) {
    return `<div style="color:red; font-style:italic;">You should choose at least one type!</div>`;
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      newPassword += randomFunc[funcName]();
    });
  }
  const finalPassword = newPassword.slice(0, length);

  return finalPassword;
};

const getRandomNumber = () => {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48); // 48 ~ 57
};

const getRandomUpper = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65); // 65 ~ 90
};

const getRandomLower = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97); // 97 ~122
};

const getRandomSymbol = () => {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33); // 31 ~ 47
};

const randomFunc = {
  upper: getRandomUpper,
  lower: getRandomLower,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};
