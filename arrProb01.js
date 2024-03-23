// Get the first and last item in an array using arr.shift() and arr.pop()

let arr = [4, 5, 6, 3, 2, 1]

function getElement() {

    let firstItem = arr.shift() //returns the first element of the array by removing it from the array

    let lastItem = arr.pop() //returns the last item element of the array by removing it from the array

    console.log("The first element of the array : " + firstItem)
    console.log("The last element of the array : " + lastItem)
}

getElement()