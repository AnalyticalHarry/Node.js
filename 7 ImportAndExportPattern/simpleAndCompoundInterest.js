const simpleInterest = (principal, rate, time) =>{
    // simple interest = principal * rate * time / 100
    const simpleInterestFormula = (principal * rate * time) / 100;
    return simpleInterestFormula;
}

const compoundInterest = (principal, rate, time) =>{
    // compound interest = principal * (1 + rate / 100) ** time - principal
    const compoundInterestFormula = principal * ((1 + rate / 100) ** time - 1);
    return compoundInterestFormula;
}

module.exports = {
    simpleInterest: simpleInterest,
    compoundInterest: compoundInterest,
}
