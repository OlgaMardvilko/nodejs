const fs = require('fs');

const readStream = input =>
  input ? fs.createReadStream(input, { encoding: 'utf8' }) : process.stdin;

module.exports = readStream;
