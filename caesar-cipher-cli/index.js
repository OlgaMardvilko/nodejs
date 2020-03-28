const { pipeline } = require('stream');
const parseCommandLineArguments = require('./commander/parseCommandLineArguments');
const transformStream = require('./streams/transformStream');
const readStream = require('./streams/readStream');
const writeStream = require('./streams/writeStream');

/* eslint-disable no-process-exit */
const handleProcessEvents = () => {
  process
    .on('uncaughtException', err => {
      process.stderr.write(err.message);
      process.exit(101);
    })
    .on('SIGINT', () => process.exit(0))
    .on(
      'exit',
      () => process.exitCode && console.log(` code: ${process.exitCode}`)
    );
};

handleProcessEvents();

const options = parseCommandLineArguments();

pipeline(
  readStream(options.input),
  transformStream(options.shift, options.action),
  writeStream(options.output),
  err => err && console.error(err)
);
