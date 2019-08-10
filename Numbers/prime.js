/* 
Have the user enter a number and find all Prime Factors (if there are any) and display them.
*/

// A function to check for primes within number and then generate prime factors
const checkForPrime = (i) => {
    for (let j = 2; j < i; j++ ) {
        if (i % j === 0) {
            return false;
        }
    }
    return true;
};


const generatePrimeFactors = (number) => {
    let primeFactors = [];

    for (let i = 2; i <= number; i++) {
        if (checkForPrime(i) && number % i === 0) {
            primeFactors.push(i);
        }
    }

    return primeFactors.toString();
};

document.querySelector('.btn').addEventListener('click', (e) => {
    console.log(generatePrimeFactors(180));
});