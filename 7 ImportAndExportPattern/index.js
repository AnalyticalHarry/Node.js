// pattern one
const add = require('./add');
console.log(add(12, 23));

// --------------------------------------------------------------------------------------------------------------------------------- // 
// pattern two
const sub = require('./sub');
console.log(sub(20, 10));

// --------------------------------------------------------------------------------------------------------------------------------- // 
// pattern three
const simpleAndCompoundInterest = require('./simpleAndCompoundInterest');
// simple interest for a principal of $1000, rate of 10%, and time of 1 year
const simpleInterestResult = simpleAndCompoundInterest.simpleInterest(1000, 10, 1);
console.log("Simple Interest:", simpleInterestResult);
// compound interest for a principal of $2000, rate of 10%, and time of 1 year
const compoundInterestResult = simpleAndCompoundInterest.compoundInterest(2000, 10, 1);
console.log("Compound Interest:", compoundInterestResult);

// es2015 features
// functions using ES2015 destructuring
const { simpleInterest, compoundInterest } = simpleAndCompoundInterest;
// simple interest using ES2015 features
console.log("Simple Interest:", simpleInterest(1000, 10, 1));
// compound interest using ES2015 features
console.log("Compound Interest:", compoundInterest(2000, 10, 1));

// --------------------------------------------------------------------------------------------------------------------------------- // 
// pattern fourth 
// solving physics with modules
const physics = require('./physics');
// initial velocity 10 m/s
const initialVelocity = 10;
// acceleration 5 m/s^2
const acceleration = 5;
// time 10 seconds
const time = 10;
// final velocity 20 m/s
const finalVelocity = 20;
// calculating all parameters using modules
const velocityCalculation = physics.calculateVelocity(initialVelocity, acceleration, time);
const displacementCalculation = physics.calculateDisplacement(initialVelocity, time, acceleration);
const accelerationCalculation = physics.calculateAcceleration(finalVelocity, initialVelocity, time);
console.log("Velocity:", velocityCalculation);
console.log("Displacement:", displacementCalculation);
console.log("Acceleration:", accelerationCalculation);

