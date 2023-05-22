const process = require('process');

let args = process.argv.slice(2);

// let implement function alarm here..

function setAlarm(seconds){

  setTimeout(() => {
    process.stdout.write('\x07');
    console.log(`Beep..! ${seconds} seconds have passed by.`);
  }, seconds * 1000);
}
// setting an alarm
for (let interval of args){
let passedInterval = parseInt(interval);
if (isNaN(passedInterval) || passedInterval < 0) {
  console.log(`IT IS NOT A NUMBER: ${interval}`);
} else{
setAlarm(passedInterval);}
}