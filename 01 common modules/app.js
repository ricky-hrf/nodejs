const math = require('./math');

let a = 20, b = 5;

let resultAddition = math.add(a, b);
let resultSubstraction = math.substract(a, b);

console.log(`${a} + ${b} = ${resultAddition}`)
console.log(`${a} - ${b} = ${resultSubstraction}`)