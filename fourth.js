/*
 * blowing things up
 *
 * https://github.com/joyent/node/issues/1990
 * https://github.com/joyent/node/issues/2175
 *
 * command: node --expose_gc <script>
 *
 * by exposing the gc, this script seems to work fine, but a little memory leak
 * is still noticeable, although not as extreme. still, it leaks; and the
 * forecast in production is probably a kaputz.
 *
 */

var gc = global.gc || function() {},
    gc_all = true,
    i = 0;

for (; i < 1000000; i += 1) {
    process.stdout.write('this should not be leaking\n');
    if (gc_all) {
        gc();
    }
}

setTimeout(function() {
    console.log('cleaning ...');
    gc();
}, 5000); // 5 secs

setTimeout(function() {
    console.log('done!');
}, 10000); // 10 secs
