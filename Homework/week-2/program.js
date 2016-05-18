 total = 0;
 
 for(pos =2; pos <= process.argv.length-1; pos++){
     total = total + parseInt(process.argv[pos]);
 }
 
 console.log(total)
