#!/usr/bin/env python

'''Create YAML catalog of CSS styles used in a set of HTML documents.

Usage: catalog.py file [file...]
'''

import sys
import yaml
from bs4 import BeautifulSoup

def main(argv):
    '''Main driver.'''

    catalog = {}
    for filename in argv[1:]:
        with open(filename, 'r') as reader:
            doc = BeautifulSoup(reader.read())
            for node in doc.descendants:
                update(catalog, node)
    display(catalog)


def update(catalog, node):
    '''Record classes used in node.'''

    if node.name is None:
        return

    if node.name not in catalog:
        catalog[node.name] = set()

    if 'class' in node.attrs:
        for cls in node.attrs['class']:
            catalog[node.name].add(cls)


def display(catalog):
    '''Show the catalog.'''

    for name in sorted(catalog.keys()):
        catalog[name] = sorted(catalog[name])
    yaml.dump(catalog, stream=sys.stdout)


if __name__ == '__main__':
    main(sys.argv)
