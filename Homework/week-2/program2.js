//   Write a program that accepts one or more numbers as command-line arguments
//   and prints the sum of those numbers to the console (stdout).
//  But!  Use a while loop
//  But!  Use a function declaration


function sumTheArgs(){ 
    var sum = 0;

    while (process.argv.length > 2){
        sum += Number(process.argv.pop())   
    }
    
    return sum;
}

console.log(sumTheArgs())
