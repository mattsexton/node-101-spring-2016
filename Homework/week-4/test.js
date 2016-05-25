'use strict';

var colors = require('colors');
var program = require('./solution');

function failed(name, message, expected, actual) {
  var output = colors.bold.red('\nTest "%s": Failed --- %s\n');
  output += colors.yellow('\tExpected: %s\n');
  output += colors.red('\tActual: %s\n');

  console.log(output, name, message, expected, actual);

  return false;
}

function passed(name, message) {
  var output = colors.green('Test "%s": Passed --- %s');

  console.log(output, name, message);
}

function testBad() {
  var invalidJson = 'This is not valid JSON';
  var actual;

  try {
    actual = program.run(invalidJson);
  }
  catch (err) {
    if (err.message === 'BAD JSON') {
      return passed(
        'Bad JSON',
        'Received expected error');
    }

    actual = err;
  }

  return failed(
    'Bad JSON',
    'Did not receive expected error',
    'Error: BAD JSON',
    actual);
}

function testWrong() {
  var wrongJson = {
    valA: 'This is',
    valB: 1,
    valC: {
      type: 'of JSON',
      which: 'should not work'
    },
    valD: true
  };
  var actual;

  try {
    actual = program.run(JSON.stringify(wrongJson));
  }
  catch (err) {
    return failed(
      'Wrong JSON',
      'Received an unexpected error',
      '--- No error ---',
      err);
  }

  if (!actual || !Array.isArray(actual)) {
    return failed(
      'Wrong JSON',
      'Received an incorrect value',
      '[]',
      actual);
  }

  return passed(
    'Wrong JSON',
    'Received valid response');
}

function testMissing() {
  var missingJson = Object.assign({}, require('./search_response'));

  missingJson.hotelList = missingJson.hotelList.map(function(val, index) {
    switch (index % 5) {
      case 0:
        // remove countryCode
        val.countryCode = '';
        break;
      case 1:
        // remove postalCode
        val.postalCode = '';
        break;
      case 2:
        // remove address
        val.address = '';
        break;
      case 3:
        // remove city
        val.city = '';
        break;
      case 4:
        // remove stateProvinceCode
        val.stateProvinceCode = '';
        break;
    }

    return val;
  });

  var actual;

  try {
    actual = program.run(JSON.stringify(missingJson));
  }
  catch (err) {
    return failed(
      'Missing JSON Values',
      'Received an unexpected error',
      '--- No error ---',
      err);
  }

  if (!actual || !Array.isArray(actual)) {
    return failed(
      'Missing JSON Values',
      'Received an incorrect value',
      'An array of hotel items',
      actual);
  }

  if (actual.length !== missingJson.hotelList.length) {
    return failed(
      'Missing JSON Values',
      'Received the wrong number of hotel items.',
      missingJson.hotelList.length,
      actual.length);
  }

  var valueCheck = actual.every(function(val, index) {
    var remainder = index % 5;
    switch (remainder) {
      case 0:
        if (val.hotelAddress.country !== '') {
          failed('Missing JSON', 'Expected an empty country', '""', val.hotelAddress.country);
          return false;
        }

        return true;
      case 1:
        if (val.hotelAddress.postalCode !== '') {
          failed('Missing JSON', 'Expected an empty postalCode', '""', val.hotelAddress.postalCode);
          return false;
        }

        return true;
      case 2:
        if (val.hotelAddress.address !== '') {
          failed('Missing JSON', 'Expected an empty address', '""', val.hotelAddress.address);
          return false;
        }

        return true;
      case 3:
        if (val.hotelAddress.city !== '') {
          failed('Missing JSON', 'Expected an empty city', '""', val.hotelAddress.city);
          return false;
        }

        return true;
      case 4:
        if (val.hotelAddress.state !== '') {
          failed('Missing JSON', 'Expected an empty state', '""', val.hotelAddress.state);
          return false;
        }

        return true;
    }
  });

  passed('Missing JSON', 'Received a valid response');
}

function testGood() {
  var searchResults = Object.assign({}, require('./search_response'));
  var actual;

  try {
    actual = program.run(JSON.stringify(searchResults));
  }
  catch (err) {
    return failed(
      'Valid and Complete JSON',
      'Received an unexpected error',
      '--- No error ---',
      err);
  }

  if (!actual || !Array.isArray(actual)) {
    return failed(
      'Valid and Complete JSON',
      'Received an incorrect value',
      'An array of hotel items',
      actual);
  }

  if (actual.length !== searchResults.hotelList.length) {
    return failed(
      'Valid and Complete JSON',
      'Received the wrong number of hotel items.',
      searchResults.hotelList.length,
      actual.length);
  }

  var testName = 'Valid and Complete JSON';
  var valueCheck = actual.every(function(val, index) {
    var sr = searchResults.hotelList[index];

    if (val.id !== sr.hotelId) {
      return failed(testName, 'Expected id to match', sr.hotelId, val.id);
    }

    if (val.name !== sr.name) {
      return failed(testName, 'Expected name to match', sr.name, val.name);
    }

    if (val.description !== sr.shortDescription) {
      return failed(testName, 'Expected description to match', sr.shortDescription, val.description);
    }

    if (val.hotelAddress.address !== sr.address) {
      return failed(testName, 'Expected address to match', sr.address, val.hotelAddress.address);
    }

    if (val.hotelAddress.city !== sr.city) {
      return failed(testName, 'Expected city to match', sr.city, val.hotelAddress.city);
    }

    if (val.hotelAddress.state !== sr.stateProvinceCode) {
      return failed(testName, 'Expected state to match', sr.stateProvinceCode, val.hotelAddress.state);
    }

    if (val.hotelAddress.country !== sr.countryCode) {
      return failed(testName, 'Expected country to match', sr.countryCode, val.hotelAddress.country);
    }

    if (val.hotelAddress.postalCode !== sr.postalCode) {
      return failed(testName, 'Expected postalCode to match', sr.postalCode, val.hotelAddress.postalCode);
    }

    if (val.starRating !== sr.hotelStarRating) {
      return failed(testName, 'Expected hotel star rating to match', sr.hotelStarRating, val.starRating);
    }

    if (val.guestRating !== sr.hotelGuestRating) {
      return failed(testName, 'Expected hotel guest rating to match', sr.hotelGuestRating, val.guestRating);
    }

    return true;
  });

  valueCheck && passed('Valid and Complete JSON', 'Received a valid response');
}

testBad();
testWrong();
testMissing();
testGood();
