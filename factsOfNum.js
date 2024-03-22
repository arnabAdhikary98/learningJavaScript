// find the factors of a number using For Loop

let n = 18;
let i =1;

for (i =1; i < n; i++) {
    if (n%i == 0) {
        console.log(i);
    }
}

console.log(n)