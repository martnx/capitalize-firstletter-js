
let word = "THIS IS AWESOME I LOVE IT sdfhmncxbvmn"

function capitalize(inputChar){
    const first = inputChar.charAt(0).toUpperCase();
    const slice = inputChar.substring(1).toLowerCase();
    return inputChar =  first + slice;
}

let inputWord = prompt("Enter word to capitalize: ");
console.log(capitalize(inputWord));



