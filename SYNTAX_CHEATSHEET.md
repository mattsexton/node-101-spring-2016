# Node Syntax Cheatsheet
A node/JavaScript syntax and code structure cheatsheet.

*Feel free to make a pull request to add or modify anything you think should be in here!*

Table of contents
===================
* [Data Types](#data-types)
    * [Number](#number)
    * [Boolean](#boolean)
    * [String](#string)
    * [Object](#object)
    * [Function](#function)
* [Type Checking Keywords](#type-checking-keywords)
* [Weird Things](#weird-things)
    * [undefined](#undefined)
    * [NaN](#nan)
    * [Equality](#equality)
    * [Array Types](#array-types)
    * [Type Coercion](#type-coercion)
* [Variable Operations](#variable-operations)
* [Function Operations](#function-operations)
* [Loops](#loops)
* [Logic](#logic)
* [Arrays](#arrays)
* [Command Line Arguments](#command-line-arguments)

## Data Types

### Number
- ```5```
- ```5678```
- ```34.56```

### Boolean
- ```true```
- ```false```
- ```Boolean(0)```

### String
- ```'Unicorn'```
- ```"Creamsicle"```

### Object
- ```{ prop: 1 }```
- ```new Object()```

### Function
- ```function (y) { return y; }```

## Type Checking Keywords

### typeof
- ```typeof 65; // 'number'``` 
- ```typeof true; // 'boolean'``` 
- ```typeof { prop: 1 }; // 'object'``` 
- ```typeof 'lol'; // 'string'``` 
- ```typeof function () {}; // 'function'``` 

## Weird Things

### undefined
JavaScript variable that has been declared but not yet assigned to.

``` var x; // undefined```

### NaN
Not a number. Usually happens when parsing or coercing a value that is not a number (like a string or object).

```parseInt('speck of dust or something');```

### Equality

```==``` only checks value and coerces type to match.

```===``` checks value and type and is faster because no coercion.

### Array Types

Arrays are technically Objects with special functionality.

```typeof [1, 2, 3]; // 'object'```

### Type Coercion
'String is King!'

**Number Result:** number + number, number + boolean, boolean + boolean

**String Result:** anything else

## Variable Operations

### Declare a variable
```var marmaduke;```

### Assign a variable
```marmaduke = 'Dog';```

### Add and Assign to a variable
```marmaduke += ' Celebrity';```

### Check Equality (with coercion)
```'90210' == 90210; // true```

### Check Equality and Type
```'90210' === 90210; // false```

## Function Operations

### Declare and Assign a Function
```var myFunc = function (x) { };```

### Declare and Assign a Function
```function myFunc (x) { };```

### Pass Arguments into a Function
```myFunc(3, 7);```

## Loops

### for Loop
```javascript
for (var i = 0; i < 10; i++) {
  // do i thang
}
```

### for...in Loop
```javascript
var arr = [1, 2, 3],
  sum = 0;

for (ix in arr) {
  sum += arr[ix] 
}
```

### forEach Loop
```javascript
var arr = [1, 2, 3],
  sum = 0;

arr.forEach(function (val) {
  sum += val; 
});
```

### while Loop
```javascript
var i = 10;

while (i > 0) {
  i++;
}
```

## Logic

## Arrays

### Bracket Notation
Retrieve elements from an array by using brackets after the array variable:

```javascript
var arr = ['a', 'b', 'c'];
arr[0]; // a
arr[2]; // c
```

### .length
Returns the length of an array.

```javascript
var arr = ['a', 'b', 'c'];
console.log(arr.length);
// 3
```

### .push()
Adds an element to the end of the array
```javascript
var arr = ['a', 'b', 'c'];
arr.push('banana');
console.log(arr); // [a, b, c, banana]
```

### .pop()
Returns the last element in an array and removes it from the array
```javascript
var arr = ['a', 'b', 'c'];
var letter = arr.pop();

console.log(letter); // c
```

### .unshift()
Adds an element to the front of an array and returns the new length
```javascript
var arr = ['a', 'b', 'c'];
arr.unshift('noodle');

console.log(arr); // [noodle, a, b, c]
```

### .shift()
Returns the first element in an array and removes it from the array
```javascript
var arr = ['a', 'b', 'c'];
var letter = arr.shift();

console.log(arr); // [b, c];
console.log(letter); // a
```

## Command Line Arguments
Stored in the ```process.argv``` variable in your application.
```javascript
// if you execute this command:
$ node index.js 4 “some word” myLeftFoot

// your process.argv in the application would be:
[‘node’, ‘index.js’, ‘4’, ‘some word’, ‘myLeftFoot’]

// access the first argument to your app with
process.argv[2]; // ‘4’
```