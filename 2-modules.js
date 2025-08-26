const firstName  = "Maryam";
if (firstName){
    console.log(firstName); 
}
else {
    console.log("wrong name");
}
console.log(`hey this is my name`);

// setInterval(()=>{
    // console.log("Hello world")
// }, 1000);
// Modules


//CommonJS - every file is module(by default)
//Modules - Encapsulated code(only share minimum)
//Every file by default is a module and it exported by using module.export to make it available globally in files taht they are requested.
const names = require('./1-names'); //exported as an object
const sayHi = require('./9-utilis'); //exported as a function
const chickenbeck = require('./3-alternative');
console.log(chickenbeck);

require('./4-mine-grenade'); //another way of calling a function without assigning it to a variable because a function already exist inside the module

sayHi('Zainab'); 
sayHi(names.james);
sayHi(chickenbeck.singlePerson.name);
