blow-things-up
==============

this is a simple repository to show how I needed node to behave, and ...

## why I don't use nodejs anymore

simply, I don't use nodejs anymore because of one simple thing: if I have memory and swap space, why can't I use them if needed?

the file called first.js is just a dumb example on how your objects can grow inside nodejs (sometimes fast) and it'll not handle it.

the second.js file is a simple "url aggregator" for squid access.log files. where I work, i can get access.log files up to 3GB+. imagine reading them with "the power of async i/o" of node and get f* up because its memory limitation.

[please, see the last question from nodejs faq](https://github.com/joyent/node/wiki/FAQ). in there, you can see this (today is august 26, 2013):

> What is the memory limit on a node process?
>
> Currently, by default v8 has a memory limit of 512mb on 32-bit systems, and 1gb on 64-bit systems. The limit can be raised by setting --max-old-space-size to a maximum of ~1gb (32-bit) and ~1.7gb (64-bit), but it is recommended that you split your single process into several workers if you are hitting memory limits.

well, I can't deal with that if I KNOW that my files may be enormous to parse.

### so what? deal with it!

thank god I know some several programming languages that also provides async i/o, like python's twisted, and they provide much more performance then node; and I do have made some benchmarks :) but it's quite unfair to compare a programming language that have threads to one that doesn't. until javascript provide sort kind of perspective, i'll not use it server-side, neither build cli tools. but ... i doubt javascript will get to that the same way low-level programmers are used to in c, c++, python, java, etc, etc ...

### but ... javascript is the most used programming language in the world!

sure? or just github says that about their repositories? :)
