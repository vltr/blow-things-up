#!/usr/bin/env python
# -*- coding: utf-8 -*-

# will python blow things up?

_str_byte_size = 4
_max_size_in_mb = 800


def int_to_megabytes(size):
    return str(size / (1024 ** 2))


def run():
    print "Let's see if Python will blow up using a lot of memory ..."
    str_len = (_max_size_in_mb * (1024 ** 2)) / _str_byte_size
    the_str = ''
    steps = str_len / 100

    for i in range(0, str_len):
        if str_len > 0 and i % steps == 0:
            print "~%s MBs and counting ..." % \
                int_to_megabytes(len(the_str) * _str_byte_size)
        the_str += ' '

    print "Wow, I'm here with an object of ~%s MBs and it didn't exploded. Hmmmm ..." \
        % int_to_megabytes(len(the_str) * _str_byte_size)


if __name__ == '__main__':
    run()
