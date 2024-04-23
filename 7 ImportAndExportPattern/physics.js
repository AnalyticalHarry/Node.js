// velocity
module.exports.calculateVelocity = (initialVelocity, acceleration, time) => {
    // velocity equation: v = u + at
    const velocity = initialVelocity + acceleration * time;
    return velocity;
}

// displacement
module.exports.calculateDisplacement = (initialVelocity, time, acceleration) => {
    // displacement equation: s = ut + (1/2)at^2
    const displacement = initialVelocity * time + 0.5 * acceleration * time * time;
    return displacement;
}

// acceleration
module.exports.calculateAcceleration = (finalVelocity, initialVelocity, time) => {
    // acceleration equation: a = (v - u) / t
    const acceleration = (finalVelocity - initialVelocity) / time;
    return acceleration;
}

