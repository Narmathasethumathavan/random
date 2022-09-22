var {generatehexString} = require('./hexstr.js');

const genUuid=()=> [8,4,4,4,12].map(stringLength => generatehexString(stringLength)).join("-");

//return uuid.join("-");

console.log(genUuid());
