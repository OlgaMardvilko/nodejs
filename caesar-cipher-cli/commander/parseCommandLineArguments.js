const { program } = require('commander');
const validateCommandLineArguments = require('./validateCommandLineArguments');
const { longShift, shortShift } = require('../const/constants');

const parseCommandLineArguments = () => {
  program
    .storeOptionsAsProperties(false)
    .requiredOption(`${shortShift}, ${longShift} <num>`, 'a shift', value =>
      parseInt(value, 10)
    )
    .requiredOption('-a, --action <action>', 'an action encode/decode')
    .option('-i, --input <filename>', 'an input file')
    .option('-o, --output <filename>', 'an output file');

  const commands = program.parse(process.argv);

  validateCommandLineArguments(commands.opts(), commands.rawArgs);

  return commands.opts();
};

module.exports = parseCommandLineArguments;
