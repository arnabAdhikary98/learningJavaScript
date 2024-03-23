// computing the power of a number using Recursion

function power(n , p) {
    if (p == 1){
        return n;
    }
    else{
        return n * power(n, p-1);
    }
}

console.log(power(5, 3)) //should return 125