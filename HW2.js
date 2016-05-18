var numArr = process.argv;
total = 0;


for(pos =2; pos <= numArr.length-1; pos++){
    total += Number(process.argv[pos]);
}

console.log(total)