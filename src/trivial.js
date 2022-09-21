const process =require('process');
console.log(process.argv);

if (process.argv.length >= 3) {
    console.log("Executing " + process.argv[2]);
    eval(process.argv[2]);
}
