'use strict';

var defaultData = 'testGood';

var goodJson = Object.assign({}, require('./search_response'));
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

var wrongJson = {
  valA: 'This is',
  valB: 1,
  valC: {
    type: 'of JSON',
    which: 'should not work'
  },
  valD: true
};

var data = {
  testGood: JSON.stringify(goodJson),
  testMissing: JSON.stringify(missingJson),
  testWrong: JSON.stringify(wrongJson),
  testBad: 'This is not valid JSON'
};

function get(callback) {
  var max = 5000;
  var min = 750;
  var random = Math.floor(Math.random() * (max - min)) + min;
  var callbackData = data[global.whichTest || defaultData];

  setTimeout(callback, random, callbackData);
}

module.exports = get;
