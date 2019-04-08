const Bear = require('./bear');
const Fish = require('./fish');
const River = require('./river');

const yogi = new Bear ('Yogi');
const nemo = new Fish ('Nemo');
const amazon = new River ('Amazon', 3);


yogi.roar();
console.log(yogi);
console.log(nemo);
console.log(amazon);

yogi.eatFish();
