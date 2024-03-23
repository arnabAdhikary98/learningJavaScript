// Reverse an array in JavaScript using .unshift() and .forEach() method

let arr = [3, 5, 89, 13, 11]

let revArr = [] //an empty array to add each element in reverse order from the original array

arr.forEach((item) => {
    revArr.unshift(item);
})

console.log(revArr)
