const { Transform } = require('stream');
const caesarCipher = require('../caesar-cipher/caesarCipher');

const transformStream = (shift, action) => {
  return new Transform({
    transform(chunk, encoding, callback) {
      this.push(caesarCipher(chunk, shift, action));
      callback();
    }
  });
};

module.exports = transformStream;
