// checking if a number is prime or not using Recursive function

function checkPrime(num, div = 2) {
    if (num <= 1) {
        return false;
    }
    if (div > Math.sqrt(num)) {
        return true;
    }
    if (num % div === 0) {
        return false
    }
    else {
        return checkPrime(num, div + 1);
    }
}

console.log(checkPrime(13) ? 'Passed number is Prime' : 'Passed number is not Prime');
console.log(checkPrime(10) ? 'Passed number is Prime' : 'Passed number is not Prime');
