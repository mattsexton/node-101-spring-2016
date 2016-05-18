// implement a naive calculator that accepts a string and executes it from left to right
// ignoring pemdas

var colors = require('colors');  //colors.green(ans)

function doBadMath(a, operand, b){
    switch(operand) {
        case '+':
            return a + b;
        case '-':
            return a - b;         
        case 'x':
            return a * b;        
        case '/':
            return a / b;          
        case '^':
            return Math.pow(a, b);                          
        default:
            console.log('!!!unsupported operand!!!');
    }    
};

function doTheColors(number){
    if (typeof(number) !== 'number'){ return 'ERROR: doTheColors wants a number'; }
    
    if (number < 0){ return colors.red(number); }
    if (number === 0){ return colors.yellow(number); }
    return colors.green(number);
};

function solution(equation_string){
    var stuff_array = equation_string.split(' ');
                                                // MAIN ACTION SECTION
    var a = Number(stuff_array.shift());        // get number a
    while (stuff_array.length){                 // while there is still more
        var operand = stuff_array.shift();      // get the next operand
        var b = Number(stuff_array.shift());    // get number b
        a = doBadMath(a, operand, b);           // doBadMath on that, and make it the new a
    }

    return doTheColors(a);    // apply the colors to a and return it as the final answer        
}; 


console.log(
    solution('1 + 3')  
);

module.exports = solution;