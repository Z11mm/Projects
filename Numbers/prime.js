/* 
Have the user enter a number and find all Prime Factors (if there are any) and display them.
*/

const primeFactors = (number) => {
    let primes = [1, 2, 3];
    let primeFactors = [];

    for (let i = 4; i <= number; i++) {
        if (i % 2 === 1) {
            primes.push(i);
        }
    }

    for (let i = 0; i < primes.length; i++) {
        if (number % primes[i] === 0) {
            primeFactors.push(primes[i]);
        }
    }
    return primeFactors;
}

console.log(primeFactors(24));