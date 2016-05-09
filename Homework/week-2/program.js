//console.log(process.argv)

//for (x in process.argv) {
var sum = 0;
for ( var x = 2; x < process.argv.length; x++ ) {
   sum += parseInt(process.argv[x]);
   //console.log(process.argv[x]);
}
console.log(sum);
