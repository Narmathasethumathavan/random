var {generatehexCharacter} = require('./hex.js');

function generatehexString(length) {
    let result ='';
    //var rhex ='0123456789ABCDEF';

    for ( let i = 0; i < length; i++ ) {
        result += generatehexCharacter();
    }

    return result;
}
    console.log(generatehexString(8));
exports.generatehexString = generatehexString