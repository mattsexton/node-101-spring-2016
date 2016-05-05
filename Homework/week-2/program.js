var arguments = process.argv;
var total = 0;

arguments.forEach(function(val){
    var numVal = Number(val);
    if(!isNaN(numVal)){
        total += numVal;
    }
})

console.log(total);