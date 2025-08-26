//Asynchronous approach
const {readFile, writeFile} = require('fs'); //Destructuring method
console.log('start');

//How to run an asynchronous function is to run it by using a callback method when we are done and ready to use it.
readFile('./content/first.txt', 'utf8', (err, result) =>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if (err) {
            console.log(err);
            return 
        }
    const second = result
    writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result)=>{
        if (err) {
            console.log(err)
            return;
        }
        console.log('done wth this task');
    })
})
 
})
console.log('starting next task');
