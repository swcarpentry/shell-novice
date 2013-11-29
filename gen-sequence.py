#!/usr/bin/env python

'''Generate random seuqence data for files in `creatures` directory.'''

import sys
import random

assert len(sys.argv) == 3, 'Usage: gen-sequence lines seed'
num_lines = int(sys.argv[1])
random.seed(sys.argv[2])
for i in range(num_lines):
    print ''.join(random.choice('ACGT') for j in range(10))
