var {randomNumber} = require('./randomNumber.js');
function generateCharacter(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   //const charactersLength = characters.length;
    for ( let i = 0; i <length; i++ ) {
        result += characters.charAt(randomNumber(0,characters.length));
    }

    return result;
}

console.log(generateCharacter(7));