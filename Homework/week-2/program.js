var arguments = process.argv;

var sum = 0;
for(var i = 0; i < arguments.length; i++){
    if(i >= 2){
        sum += Number(arguments[i]);
    }
}
console.log(sum);