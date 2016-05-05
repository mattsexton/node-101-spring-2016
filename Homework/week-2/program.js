//   Write a program that accepts one or more numbers as command-line arguments
//   and prints the sum of those numbers to the console (stdout).

var len = process.argv.length;

var sum = 0;
for (var i=2; i<len; i++){
    sum += Number(process.argv[i])
}

console.log(sum)

