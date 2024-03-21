//Using Ternary Operator

function checkNum(num) {
        const result = 
        num === 0 ? 'The number is Zero' :
        num > 0 ? `${num} is positive.` : `${num} is negative.`;

        console.log(result);
    }

checkNum(12)