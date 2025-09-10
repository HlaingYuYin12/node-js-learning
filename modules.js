// const xyz = require('./people'); //return array

// console.log(xyz); //return empty object{}

// // console.log(people); //people is not defined


// const { people } = require('./people');
// console.log(people,ages); //ages is not defined


const { people, ages } = require('./people'); 
console.log(people,ages); 


const os = require('os');
console.log(os.platform(), os.homedir());  //win32 C:\Users\Lenovo