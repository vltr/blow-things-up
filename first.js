/*
 * simple cli script to test if node blows things up
 */

var strByteSize = 4,
    maxSizeInMB = 800;

console.log('Node version: ' + process.version);

console.log("\nLet's see if I'll blow everything up, starting ...");

function intToMegaBytes(size) {
    return (size/Math.pow(1024, 2)).toFixed(0);
}

var strLen = (maxSizeInMB * Math.pow(1024, 2)) / strByteSize,
    theStr = '', // 0 bytes ?
    steps = strLen / 100,
    i = 0;

for (i = 0; i < strLen; i += 1) {
    if (strLen > 0 && i % steps === 0) {
        console.log(intToMegaBytes(theStr.length * strByteSize),
            "MBs and counting ...");
    }
    theStr += ' ';
}

console.log("Wow, I'm here with an object of ",
    intToMegaBytes(theStr.length * strByteSize),
    "MBs and didn't exploded. Hmmm ...");
