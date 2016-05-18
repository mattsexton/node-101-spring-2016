'use strict';

var colors = require('colors');
var doMath = require('./solution');

var failedEquality = 'Actual result value does not equal expected result value.';
var failedColor = 'Actual result color does not equal expected result color.';

var equations = [
  '1 + 2 + 3 = 6',
  '3 - 2 - 10 = -9',
  '10 + 2 - 3 = 9',
  '1 x 8 x 2 - 16 = 0',
  '3 + 4 x -7 = -49',
  '28 / 7 / 2 = 2',
  '1 + 2 ^ 3 - 4 x 5 = 115',
  '5 x 4 - 3 ^ 2 x -1 = -289',
  '1 + 2 ^ 3 - 4 x -5 + 115 = 0',
  '21 / 7 - 12 x 4 / 5  = -7.2'
];

var tests = equations.map(function (val) {
  var item = val.split('=');

  return {
    equation: item[0].trim(),
    expected: Number(item[1])
  };
});

function getExpectedColor(expected) {
  if (expected > 0) {
    return colors.green;
  }
  else if (expected === 0) {
    return colors.yellow;
  }
  else {
    return colors.red;
  }
}

function failed(expected, actual, index, equation, reason) {
  var output = colors.bold.red('\nTest %s: Failed --- %s\n');
  output += colors.white('\tFor equation: %s\n');
  output += colors.yellow('\tExpected: %s\n');
  output += colors.red('\tActual: %s\n');

  console.log(output, index, reason, equation, expected, actual);
}

function passed(expected, actual, index, equation) {
  var output = colors.green('Test %s: Passed --- %s = ');
  output += '%s';

  console.log(output, index, equation, actual);
}

function testAbsoluteEquality(result, test, index) {
  if (result !== test.expected) {
    failed(test.expected, result, index, test.equation, failedEquality);

    return false;
  }

  return true;
}


function testColorValue(result, test, index) {
  var c = getExpectedColor(test.expected);

  if (result !== c(test.expected)) {
    failed(c(test.expected), result, index, test.equation, failedColor);
  }
  else {
    passed(c(test.expected), result, index, test.equation);
  }
}

function runTests(val, index) {
  var result = doMath(val.equation);
  var numberResult = Number(colors.strip(result));

  if (testAbsoluteEquality(numberResult, val, index)) {
    testColorValue(result, val, index);
  }
}

tests.forEach(runTests);
