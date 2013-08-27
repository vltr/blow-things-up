/*
 * blowing things up again - perhaps
 */

var fs = require('fs'),
    readline = require('readline'),
    matcher = /(https*:\/{2}.*?\/)\s*/i,
    accessLog = './access.log';

var rd = readline.createInterface({
    input: fs.createReadStream(accessLog),
    output: process.stdout,
    terminal: false
});

var sites = [],
    found = null;

function siteExists(site) {
    return sites.indexOf(site) > -1;
}

rd.on('line', function(line) {
    found = matcher.exec(line);
    if (found) {
        site = found[0];
        if (!siteExists(site)) {
            sites.push(site);
        }
    }
});

rd.on('close', function() {
    // console.log("Found all of those domains:\n");
    // sites.forEach(function(site) {
        // console.log("  *", site);
    // });
    console.log("Found", sites.length.toFixed(0), "URLs in the",
        accessLog, "file.");
});
