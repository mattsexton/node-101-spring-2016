'use strict';

const inquirer = require('inquirer');
const chalk = require('chalk');

console.log(chalk.bold.underline.bgCyan('Find a hotel for your next vacation.'));

const questions = [
  {
    type: 'list',
    name: 'regionId',
    message: chalk.blue('Choose a destination.'),
    choices: [
      {
        name: 'Seattle, WA',
        value: 178307
      },
      {
        name: 'Austin, TX',
        value: 178234
      },
      {
        name: 'Maui, HI',
        value: 180073
      },
      {
        name: 'London, England, UK',
        value: 178279
      },
      {
        name: 'Bali, Indonesia',
        value: 602651
      }
    ]
  },
  {
    type: 'input',
    name: 'checkInDate',
    message: chalk.green('When would you like to check in?'),
    default() {
      const date = new Date();
      date.setDate(date.getDate() + 7);

      return date.toISOString().replace(/T[^$]*$/, '');
    },
    validate(value) {
      const date = Date.parse(value);

      if (date) {
        if (date < Date.now()) {
          return 'You cannot book a room in the past. Please select a future date.';
        }

        return true;
      }

      return 'Please select a valid date.';
    },
    filter: value => new Date(value).toISOString().replace(/T[^$]*$/, '')
  },
  {
    type: 'list',
    name: 'checkOutDate',
    message: chalk.green('How many nights would you like to stay?'),
    choices: [
      {
        name: '1 night',
        value: 1
      },
      {
        name: '2 nights',
        value: 2
      },
      {
        name: '3 nights',
        value: 3
      },
      {
        name: '1 week',
        value: 7
      },
      {
        name: '2 weeks',
        value: 14
      },
      {
        name: chalk.underline('Enter a different number of nights.'),
        value: 0
      }
    ]
  },
  {
    type: 'input',
    name: 'checkOutDate',
    message: chalk.green('Enter the number of nights you would like to stay.'),
    when: answers => answers.checkOutDate === 0,
    validate(value) {
      if (Number(value) > 0) {
        return true;
      }

      return 'Please choose a number greater than 0.';
    }
  },
  {
    type: 'confirm',
    message: chalk.cyan('Would you like to filter the hotel quality?'),
    name: 'filterStarRatings'
  },
  {
    type: 'checkbox',
    message: chalk.cyan('Choose all star ratings you prefer.'),
    name: 'filterStarRatings',
    choices: [
      {
        name: chalk.bold.bgBlue('5 Stars'),
        value: '50'
      },
      {
        name: chalk.bold.bgCyan('4 Stars'),
        value: '40,45'
      },
      {
        name: chalk.bold.bgGreen('3 Stars'),
        value: '30,35'
      },
      {
        name: chalk.bold.bgYellow('2 Stars'),
        value: '20,25'
      },
      {
        name: chalk.bold.bgMagenta('1 Stars'),
        value: '10,15'
      },
      {
        name: chalk.bold.bgRed('0 Stars'),
        value: '0,5'
      }
    ],
    when(answers) {
      const doFilter = answers.filterStarRatings === true;

      if (!doFilter) {
        Reflect.deleteProperty(answers, 'filterStarRatings');
      }

      return doFilter;
    },
    validate(answer) {
      if (answer.length < 1) {
        return 'Please select at least one star rating.';
      }

      return true;
    },
    filter: values => values.join(',').split(',').sort().join(',')
  }
];

inquirer.prompt(questions)
  .then(answers => {
    const outDate = new Date(answers.checkInDate);

    outDate.setDate(outDate.getDate() + answers.checkOutDate);
    answers.checkOutDate = outDate.toISOString().replace(/T[^$]*$/, '');

    console.log(chalk.bold.bgGreen('\nSearch Requirements:'));
    console.log(require('util').inspect(answers, { depth: 2, colors: true, showHidden: true }));
  });
