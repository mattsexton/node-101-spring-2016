const child = require('child_process');

// tests 

test('addTest', 'node solution.js 1 + 2 + 3', '6');
test('subtractTest', 'node solution.js 3 - 2 - 10', '-9');
test('addSubTest', 'node solution.js 10 + 2 - 3', '9');
test('mulTest', 'node solution.js 1 \\* 8 \\* 2', '16');
test('addMulTest', 'node solution.js 3 + 4 \\* 7', '49');
test('divideTest', 'node solution.js 28 / 7 / 2', '2');

// test function
function test(testName, execCommand, expResult) {
    child.exec(execCommand, (err, stdout, stderr) => {
        if (err || stderr) {
            console.error('error happened: ' + err || stderr);
        } else if (expResult != stdout.trim()) {
            console.error('Test: ' + testName + ' failed. Expected ' + expResult + ' but got ' + stdout.trim());
        } else {
            console.log('Test: ' + testName + ' passed.');
        }
    });
}
