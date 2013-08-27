/*
 * blowing things up
 *
 * https://github.com/joyent/node/issues/1906
 * https://github.com/joyent/node/issues/1990
 *
 * command: node --expose_gc <script>
 *
 * seems to work fine in node v0.10.x, with maximum buffer size of 1023MB
 */

var gc = global.gc || function() {},
    buffer = new Buffer(1024 * 1024 * 1023),
    i = 0;

for (; i < buffer.length; i += 1) {
    buffer[i] = 1;
}

buffer = null;

setTimeout(function() {
    console.log('cleaning ...');
    gc();
}, 5000); // 5 secs

setTimeout(function() {
    console.log('done!');
}, 10000); // 10 secs
