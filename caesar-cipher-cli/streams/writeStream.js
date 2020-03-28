const fs = require('fs');

const writeStream = output =>
  output ? fs.createWriteStream(output, { flags: 'a' }) : process.stdout;

module.exports = writeStream;
