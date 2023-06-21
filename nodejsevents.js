const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterfall', () => {
  console.log('please turn off the motor!');
  setTimeout(() => {
    console.log('please turn off the motor! its a gentle reminder');
  }, 3000);
});

console.log("The script is running");
myEmitter.emit('waterfall');
console.log("The script is still running");