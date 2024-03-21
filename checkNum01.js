// usingSwitchStatement

function isNumber(num) {
    switch (Math.sign(num)) {
        case 1:
            console.log('The number is Positive');
            break;
        case -1:
            console.log('The number is Negative');
            break;
        default:
            console.log('The number is Zero');
    }
    
}

isNumber(12) //output Positive
// isNumber(-13) //ouput Negative 
// isNumber(0) //output Zero