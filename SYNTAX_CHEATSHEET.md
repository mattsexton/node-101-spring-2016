# Node Syntax Cheatsheet

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