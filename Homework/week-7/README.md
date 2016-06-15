# Week 7 Homework - Create a command line interface for a hotel search

## Objectives
1. Using the [Inquirer](https://github.com/SBoudrias/Inquirer.js) module from NPM, create a command line interface that asks the user questions to gather the necessary data for a hotel search.
  - be sure you install the inquirer module: `npm install inquirer`
  - You will not perform a search yet, you will be doing that as your final project in week 8.
- Use the search parameters defined in the [search parameters api](https://www.expedia.com/static/mobile/APIConsole/DescribeObject.html?Object=com.expedia.www.mobile.ui.hotel.viewmodel.HotelSearchFields&type=parameterValue) as the basis for the questions you need to ask.
  - Use the info page to determine the format of the parameter values.
  - Required Parameters (not for the homework, but because they API requires them)
    - `city` or `regionId`
    - `checkInDate`
    - `checkOutDate`
    - `room` or `room1`
      - As far as I know, these do exactly the same thing, I do not know why there are two different parameters, I just use `room`
  - Optional Parameters:
    - `latitude` and `longitude`
    - `filterUnavailable`
    - `filterHotelName`
      - e.g. allow the user to define a specific hotel
    - `filterPrice`
    - `filterPriceBuckets`
    - `filterStarRatings`
    - `sortOrder`
    - `resultsPerPage`
  - Any of the other parameters on the list require either user information or a more in depth knowledge of the platform (:neckbeard: nerd alert!) and what the codes are. If you know them, have fun, if not, have fun still :smiley:
- Try and use the different prompt types: `input`, `confirm`, `list`, `rawList`, `expand`, `checkbox`, and `password` (although `password` is probably of no value here)
- There is no test file this week, so build the program in whichever manner using whatever names you prefer
- Submit your homework to Matt or Ryan and we will review it and provide feedback.

## Requirements
1. Be Creative

## Optional
1. Use a module to colorize your output to make it more interesting on screen
  - Some module options:
    - [chalk](https://github.com/chalk/chalk)
    - [cli-color](https://github.com/medikoo/cli-color)
    - [colors.js](https://github.com/Marak/colors.js)
