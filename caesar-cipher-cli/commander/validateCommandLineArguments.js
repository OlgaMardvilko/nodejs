const fs = require('fs');
const { encode, decode, longShift, shortShift } = require('../const/constants');

const validateCommandLineArguments = (options, rawArguments) => {
  const indexOfShiftArgument =
    rawArguments.indexOf(shortShift) !== -1
      ? rawArguments.indexOf(shortShift)
      : rawArguments.indexOf(longShift);

  if (/[^0-9]/.test(rawArguments[indexOfShiftArgument + 1])) {
    throw Error(
      `${rawArguments[indexOfShiftArgument]} should be a valid integer`
    );
  }

  if (options.action !== encode && options.action !== decode) {
    throw Error(`Action must be ${encode} or ${decode}`);
  }

  if (options.input) {
    checkFile(options.input, fs.constants.R_OK, 'is not readable');
  }

  if (options.output) {
    checkFile(options.output, fs.constants.W_OK, 'is read-only');
  }
};

const checkFile = (file, access, message) => {
  // eslint-disable-next-line no-bitwise
  fs.access(file, fs.constants.F_OK | access, err => {
    if (err) {
      throw Error(
        `File ${file} ${err.code === 'ENOENT' ? 'does not exist' : message}`
      );
    }
  });

  fs.lstat(file, (err, stats) => {
    if (err) {
      throw err;
    }

    if (stats.isDirectory()) {
      throw Error(`File ${file} is a directory`);
    }
  });
};

module.exports = validateCommandLineArguments;
