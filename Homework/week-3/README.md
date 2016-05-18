# Week 3 Homework - The Naive Calculator
### Due 5/17

This homework will require you to consume a module from NPM, and export your own module that will be consumed by `test.js` to validate your results.

**Be sure to sync your forked repository first**

### Objectives
- Build a calculator module
  - Executes addition, subtraction, division, multiplication, and exponent operations
    - addition: `+`
    - subtraction: `-`
    - division: `/`
    - multiplication: `x`
      - use `x` instead of `*` so it doesn't need to be escaped
    - exponent: `^`
  - Accept a string equation
    - e.g.
    ```js
    '1 + 2 - 3 / 4 x 5 ^ 6'
    ```
  - Operations execute from left to right
    - This not the typical order of operations, which is why its a naive calculator
  - Export a function that will do a calculation
    - i.e.
    ```js
    module.exports = function (equation) {
        return '<Your result here>';
    }
    ```
- Use the Colors module to colorize the result
  - `npm install colors`
  - If the result is greater than 0, use green :: <span style="color:green">123</span>
  - If the result is equal to 0, use yellow :: <span style="color:rgb(180, 180, 0)">0</span>
  - If the result is less than 0, use red :: <span style="color: darkred">-123</span>
- Return the colorized result
- Title the solution file: `solution.js`
- Ensure that the included `test.js` file passes all tests
    - To run, execute `node test.js` in the same directory where you have `solution.js` (should be this one).

Example:

```sh
$ node test.js
> Test 0: Passed --- 1 + 2 + 3 = 6
```

### Notes
- Assume a properly formatted string

### What to turn in

- Submit a Pull Request titled: Homework 3 - [your name]
- PR should contain a new folder with your last name and one file: `solution.js`
