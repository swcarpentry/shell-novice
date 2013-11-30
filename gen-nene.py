#!/usr/bin/env python

'''Generate random data for files in `filesystem/users/nelle/north-pacific-gyre/2012-07-03/NENE*.txt`.'''

import sys
import os
import random

assert len(sys.argv) >= 5, \
    'Usage: {0} mean length output_directory filenames'.format(sys.argv[0])

mean, length, output_directory, filenames = \
    float(sys.argv[1]), int(sys.argv[2]), sys.argv[3], sys.argv[4:]

assert mean > 0.0, \
    'Mean {0} must be positive'.format(mean)
assert length > 0, \
    'File length {0} must be positive'.format(length)
assert os.path.isdir(output_directory), \
    'Output directory "{0}" does not exist'.format(output_directory)
assert len(filenames) > 0, \
    'No filenames provided'

for f in filenames:
    with open(os.path.join(output_directory, f), 'w') as writer:
        for i in range(length):
            print >> writer, random.expovariate(1.0/mean)
