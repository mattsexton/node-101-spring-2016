# Week 5 Homework - Make a list of hotel items using callback patterns

## Objectives
1. Make a new `solution.js` for Week 5
- Import your `solution.js` module from Week 4
  - You will use this to generate the same results
- Import the `get-search-results.js` module in this directory.
  - This module exports a function that requires a callback as its only parameter
  - Call this function and pass it a function to call when it is ready to send the string formatted JSON
- Use last weeks module to generate the list of hotels
- Export a `run` function in Week 5's `solution.js` to accept a callback function as it's only parameter
  - This callback function requires two parameters to be passed to it
    - e.g.
    ```js
    callback(error, results)
    ```
    - the first parameter is an error placeholder
      - If your program encounters an error, call the callback with the error as the first parameter
      - If you do not encounter an error pass a falsy value
    - the second parameter should be the results
      - If your program does not encounter an error, call the callback with your results as the second parameter
      - If you pass an error as the first parameter, anything you pass as the second will be ignored.
- When you have generated your list of hotels, invoke the callback as defined in the previous steps, passing your list of hotels as the second parameter.
