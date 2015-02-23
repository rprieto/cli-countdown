#!/usr/bin/env node

var cli = require('optimist')
.usage('Count down a number of seconds\nUsage: $0 -s [duration] -m [custom message]')
.describe('s', 'Number of seconds')
.describe('m', 'Custom message')
.describe('help', 'Show usage')
.default({ s: 10, m: '' });

if (cli.argv.help) {
  return cli.showHelp();
}

var seconds = cli.argv.s;

process.on('SIGINT', function() {
  process.stdout.write('\n');
  process.exit(1);
});

function timer() {
  if (seconds > 0) {
    process.stdout.write('\r' + cli.argv.m + ' ' + seconds + ' ');
    --seconds;
    setTimeout(timer, 1000);
  } else {
    process.stdout.write('\r' + cli.argv.m + ' 0\n');
    process.exit(0);
  }
}

timer();
