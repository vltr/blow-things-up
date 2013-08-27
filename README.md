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

## UPDATE: some results i got

well, today (august 27, 2013) I ported the same node code to std python, and applied some "fixes" to node scripts to have "the same result". well, the output tells for itself: first.py works and this is the output of second.[js|py]:

```
$ uname -a
Linux mordor 3.2.0-52-generic #78-Ubuntu SMP Fri Jul 26 16:21:44 UTC 2013 x86_64 x86_64 x86_64 GNU/Linux

$ ls -l | grep access
-rw-rw-r-- 1 richard richard 3912914222 Aug 27 09:57 access.log

$ # an access.log of 3.64GB :)

$ python --version
Python 2.7.3

$ node --version
v0.10.17

$ /usr/bin/time -v python second.py 
Found 39147 URLs in the access.log file
    Command being timed: "python second.py"
    User time (seconds): 275.73
    System time (seconds): 0.87
    Percent of CPU this job got: 99%
    Elapsed (wall clock) time (h:mm:ss or m:ss): 4:38.45
    Average shared text size (kbytes): 0
    Average unshared data size (kbytes): 0
    Average stack size (kbytes): 0
    Average total size (kbytes): 0
    Maximum resident set size (kbytes): 38768
    Average resident set size (kbytes): 0
    Major (requiring I/O) page faults: 0
    Minor (reclaiming a frame) page faults: 2562
    Voluntary context switches: 2871
    Involuntary context switches: 26022
    Swaps: 0
    File system inputs: 828888
    File system outputs: 0
    Socket messages sent: 0
    Socket messages received: 0
    Signals delivered: 0
    Page size (bytes): 4096
    Exit status: 0

$ # maximum usage of memory was 37.86MB!

$ /usr/bin/time -v node second.js 
Found 39147 URLs in the./access.logfile.
    Command being timed: "node second.js"
    User time (seconds): 415.10
    System time (seconds): 2.25
    Percent of CPU this job got: 100%
    Elapsed (wall clock) time (h:mm:ss or m:ss): 6:55.18
    Average shared text size (kbytes): 0
    Average unshared data size (kbytes): 0
    Average stack size (kbytes): 0
    Average total size (kbytes): 0
    Maximum resident set size (kbytes): 4263168
    Average resident set size (kbytes): 0
    Major (requiring I/O) page faults: 0
    Minor (reclaiming a frame) page faults: 309252
    Voluntary context switches: 495004
    Involuntary context switches: 36518
    Swaps: 0
    File system inputs: 8
    File system outputs: 0
    Socket messages sent: 0
    Socket messages received: 0
    Signals delivered: 0
    Page size (bytes): 4096
    Exit status: 0

$ # erm ... 4.06GB? REALLY?
```
## final notes

damn, python is easy! and memory friendly ... in a couple of years i'll compare them again ...
