import './index.css';

const today = new Date();
const currentTime = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
debugger; //eslint-disable-line no-debugger
console.log(`The current time is ${currentTime}`);
