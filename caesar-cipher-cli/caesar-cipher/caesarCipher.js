const { encode, decode } = require('../const/constants');

const isUpperCaseLetter = letter => letter > 64 && letter < 91;
const isLowerCaseLetter = letter => letter > 96 && letter < 123;
const isLetter = letter =>
  isLowerCaseLetter(letter) || isUpperCaseLetter(letter);

const caesarFunctions = {
  [encode]: (letter, key) => letter + key,
  [decode]: (letter, key) => letter - key
};

const normalizeLetter = letterCode => {
  const normalized = letterCode < 0 ? letterCode + 26 : letterCode;
  return letterCode > 25 ? letterCode - 26 : normalized;
};

const alterLetter = (func, letter, key) => {
  const shift = isUpperCaseLetter(letter) ? 65 : 97;
  const letterCode = normalizeLetter((func(letter, key) - shift) % 26);
  return letterCode + shift;
};

const caesarCipher = (arr, key, func) => {
  return arr.map(letter =>
    isLetter(letter) ? alterLetter(caesarFunctions[func], letter, key) : letter
  );
};

module.exports = caesarCipher;
