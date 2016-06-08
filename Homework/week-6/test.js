'use strict';
const assert = require('assert');
const program = require('./solution');

const curDate = new Date();
curDate.setMonth(curDate.getMonth() + 1);

let i = 10;
const runs = [
  [false, 'seattle', new Date(curDate.setDate(i--)), i],
  [false, 'austin,tx', new Date(curDate.setDate(i--)), i],
  [false, 'Bali,Indonesia', new Date(curDate.setDate(i--)), i],
  [false, 'seattle', new Date(curDate.setDate(i--))],
  [false, 'seattle', new Date(curDate.setDate(i--)), 'a'],
  [false, 'seattle', '1/1/2017', 10],
  [true, 'seattle', '1/1/2016', 10],
  [true, 'seattle', 'a', 10],
  [true, 178307, 'a', 10],
  [true, 178307, '1/1/2016', 10],
  [false, 178307, '1/1/2017', 10],
  [false, 178307, new Date(curDate.setDate(i--)), i],
  [false, 178234, new Date(curDate.setDate(i--)), i],
  [false, 602651, new Date(curDate.setDate(i--)), i],
  [false, 178307, new Date(curDate.setDate(i--)), 'a'],
  [false, 178307, new Date(curDate.setDate(i--))]
];

const work = runs.map(run => new Promise((resolve) => {
  const expectError = run.shift();
  const callback = (error, data) => resolve({
    error,
    data,
    expectError,
    run
  });

  program.run.apply(null, [callback].concat(run));
}));

Promise.all(work)
  .then(results => setTimeout(checkWork.bind(null, results), 10))
  .catch(err => {
    console.error(err);
  });

function checkWork(results) {
  let runMsg;

  assert.equal(results.length, runs.length, 'Did not recieve the proper number of results. Did all your runs complete properly?');

  for (const {error, data, expectError, run} of results) {
    runMsg = `for run with parameters: (${JSON.stringify(run).slice(1, -1).replace(/,/g, ', ')})`;

    if (expectError) {
      assert.ok(error instanceof Error, `Expected an error ${runMsg}`);
    }
    else {
      assert.ok(!error, `Dit NOT expected an error ${runMsg}, with message: ${error}`);
      assert.ok(data && Object.keys(data).length, `Expected a data object ${runMsg}`);
      assert.ok(data.numberOfRoomsRequested === 1, 'Only expected 1 room');
      if (Number(run[0])) {
        assert.ok(data.searchRegionId === run[0].toString(), `Expected searchRegionId to match ${run[0]}`);
      }
      else {
        const cityCheck = new RegExp(run[0].split(',')[0], 'i');
        assert.ok(data.searchRegionCity.match(cityCheck), `Expected searchRegionCity to contain ${run[0]}`);
      }
    }
  }

  console.log('Success!');
}
