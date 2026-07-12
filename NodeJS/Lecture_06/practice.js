const fs = require('fs')

console.log('1. Start of script');

//Synchronous (Blocking) Operation
console.log('2. Reading file synchronously');
const dataSync = fs.readFileSync('user.txt', 'utf8');
console.log('3. Synchronous Read Complete')

//Asynchronous (non-blocking) operation
console.log('4. Reading file asynchronously');
fs.readFile('user.txt', 'utf8', (err, dataSync) => {
    if (err) throw err;
    console.log('6. asynchronous read complete');
})

console.log('5. End of Script');