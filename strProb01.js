// JavaScript Program to Check if a String Contains any Whitespace Characters Using regular expressions

function checkWhitespace(str) {
    return /\s/.test(str); //The “\s” metacharacter is used to match the whitespace character.
}

let str = 'This is JavaScript'

if (checkWhitespace(str)) {
    console.log(`${str} \n"This above string contains whitespace characters."`);
}
else {
    console.log(`${str} \n"The above string does not contain whitespace characters."}`);
}

