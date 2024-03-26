// reverese a string using For Loop

function reverseStr(str) {
    let strRev = "";
    for (let i = str.length-1; i>=0; i--) {
        strRev += str[i];
    }
    console.log(strRev);
}

reverseStr('I am a student')