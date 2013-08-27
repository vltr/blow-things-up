#!/usr/bin/env python
# -*- coding: utf-8 -*-

# will python blow things up?

import re

_URL_RE = re.compile("(https*:\\/{2}.*?\\/)\\s*", re.I)
_ACCESS_LOG = "access.log"


def get_access_log_contents():
    f = open(_ACCESS_LOG, 'r')
    for l in f.xreadlines():
        yield l
    f.close()

def run():
    sites = []
    for line in get_access_log_contents():
        match = _URL_RE.search(line) 
        if match:
            if match.group(0) not in sites:
                sites.append(match.group(0))
    # print "Found all of those domains:\n"
    # for site in sites:
        # print "  * %s" % site
    print "Found %i URLs in the %s file" % (len(sites), _ACCESS_LOG)


if __name__ == "__main__":
    run()
