// Get the first and last item in an array using arr.slice()

let arr = [19, 30, 4, 45, 90, 10, 1, 36]

function arrSlice() {
    
    let firstElement = arr.slice(0,1)
    let lastElement = arr.slice(-1)

    console.log('First element of the array is: ' + firstElement)
    console.log('Last element of the array is: ' + lastElement)
}

arrSlice()