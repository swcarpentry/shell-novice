#!/usr/bin/env python

'''Check that a workshop's index.html metadata is valid.  See the
docstrings on the checking functions for a summary of the checks.
'''

import sys
import os
import re
import logging
import yaml
from collections import Counter

__version__ = '0.6'


# basic logging configuration
logger = logging.getLogger(__name__)
verbosity = logging.INFO  # severity of at least INFO will emerge
logger.setLevel(verbosity)

# create console handler and set level to debug
console_handler = logging.StreamHandler()
console_handler.setLevel(verbosity)

formatter = logging.Formatter('%(levelname)s: %(message)s')
console_handler.setFormatter(formatter)
logger.addHandler(console_handler)


# TODO: these regexp patterns need comments inside
EMAIL_PATTERN = r'[^@]+@[^@]+\.[^@]+'
HUMANTIME_PATTERN = r'((0?[1-9]|1[0-2]):[0-5]\d(am|pm)(-|to)(0?[1-9]|1[0-2]):[0-5]\d(am|pm))|((0?\d|1\d|2[0-3]):[0-5]\d(-|to)(0?\d|1\d|2[0-3]):[0-5]\d)'
EVENTBRITE_PATTERN = r'\d{9,10}'
URL_PATTERN = r'https?://.+'

CARPENTRIES = ("dc", "swc")
DEFAULT_CONTACT_EMAIL = 'admin@software-carpentry.org'

USAGE = 'Usage: "check-workshop path/to/index.html"\n'

# Country and language codes.  Note that codes mean different things: 'ar'
# is 'Arabic' as a language but 'Argentina' as a country.

ISO_COUNTRY = [
    'ad', 'ae', 'af', 'ag', 'ai', 'al', 'am', 'an', 'ao', 'aq', 'ar', 'as',
    'at', 'au', 'aw', 'ax', 'az', 'ba', 'bb', 'bd', 'be', 'bf', 'bg', 'bh',
    'bi', 'bj', 'bm', 'bn', 'bo', 'br', 'bs', 'bt', 'bv', 'bw', 'by', 'bz',
    'ca', 'cc', 'cd', 'cf', 'cg', 'ch', 'ci', 'ck', 'cl', 'cm', 'cn', 'co',
    'cr', 'cu', 'cv', 'cx', 'cy', 'cz', 'de', 'dj', 'dk', 'dm', 'do', 'dz',
    'ec', 'ee', 'eg', 'eh', 'er', 'es', 'et', 'eu', 'fi', 'fj', 'fk', 'fm',
    'fo', 'fr', 'ga', 'gb', 'gd', 'ge', 'gf', 'gg', 'gh', 'gi', 'gl', 'gm',
    'gn', 'gp', 'gq', 'gr', 'gs', 'gt', 'gu', 'gw', 'gy', 'hk', 'hm', 'hn',
    'hr', 'ht', 'hu', 'id', 'ie', 'il', 'im', 'in', 'io', 'iq', 'ir', 'is',
    'it', 'je', 'jm', 'jo', 'jp', 'ke', 'kg', 'kh', 'ki', 'km', 'kn', 'kp',
    'kr', 'kw', 'ky', 'kz', 'la', 'lb', 'lc', 'li', 'lk', 'lr', 'ls', 'lt',
    'lu', 'lv', 'ly', 'ma', 'mc', 'md', 'me', 'mg', 'mh', 'mk', 'ml', 'mm',
    'mn', 'mo', 'mp', 'mq', 'mr', 'ms', 'mt', 'mu', 'mv', 'mw', 'mx', 'my',
    'mz', 'na', 'nc', 'ne', 'nf', 'ng', 'ni', 'nl', 'no', 'np', 'nr', 'nu',
    'nz', 'om', 'pa', 'pe', 'pf', 'pg', 'ph', 'pk', 'pl', 'pm', 'pn', 'pr',
    'ps', 'pt', 'pw', 'py', 'qa', 're', 'ro', 'rs', 'ru', 'rw', 'sa', 'sb',
    'sc', 'sd', 'se', 'sg', 'sh', 'si', 'sj', 'sk', 'sl', 'sm', 'sn', 'so',
    'sr', 'st', 'sv', 'sy', 'sz', 'tc', 'td', 'tf', 'tg', 'th', 'tj', 'tk',
    'tl', 'tm', 'tn', 'to', 'tr', 'tt', 'tv', 'tw', 'tz', 'ua', 'ug', 'um',
    'us', 'uy', 'uz', 'va', 'vc', 've', 'vg', 'vi', 'vn', 'vu', 'wf', 'ws',
    'ye', 'yt', 'za', 'zm', 'zw'
]

ISO_LANGUAGE = [
    'aa', 'ab', 'ae', 'af', 'ak', 'am', 'an', 'ar', 'as', 'av', 'ay', 'az',
    'ba', 'be', 'bg', 'bh', 'bi', 'bm', 'bn', 'bo', 'br', 'bs', 'ca', 'ce',
    'ch', 'co', 'cr', 'cs', 'cu', 'cv', 'cy', 'da', 'de', 'dv', 'dz', 'ee',
    'el', 'en', 'eo', 'es', 'et', 'eu', 'fa', 'ff', 'fi', 'fj', 'fo', 'fr',
    'fy', 'ga', 'gd', 'gl', 'gn', 'gu', 'gv', 'ha', 'he', 'hi', 'ho', 'hr',
    'ht', 'hu', 'hy', 'hz', 'ia', 'id', 'ie', 'ig', 'ii', 'ik', 'io', 'is',
    'it', 'iu', 'ja', 'jv', 'ka', 'kg', 'ki', 'kj', 'kk', 'kl', 'km', 'kn',
    'ko', 'kr', 'ks', 'ku', 'kv', 'kw', 'ky', 'la', 'lb', 'lg', 'li', 'ln',
    'lo', 'lt', 'lu', 'lv', 'mg', 'mh', 'mi', 'mk', 'ml', 'mn', 'mr', 'ms',
    'mt', 'my', 'na', 'nb', 'nd', 'ne', 'ng', 'nl', 'nn', 'no', 'nr', 'nv',
    'ny', 'oc', 'oj', 'om', 'or', 'os', 'pa', 'pi', 'pl', 'ps', 'pt', 'qu',
    'rm', 'rn', 'ro', 'ru', 'rw', 'sa', 'sc', 'sd', 'se', 'sg', 'si', 'sk',
    'sl', 'sm', 'sn', 'so', 'sq', 'sr', 'ss', 'st', 'su', 'sv', 'sw', 'ta',
    'te', 'tg', 'th', 'ti', 'tk', 'tl', 'tn', 'to', 'tr', 'ts', 'tt', 'tw',
    'ty', 'ug', 'uk', 'ur', 'uz', 've', 'vi', 'vo', 'wa', 'wo', 'xh', 'yi',
    'yo', 'za', 'zh', 'zu'
]


def add_error(msg, errors):
    """Add error to the list of errors."""
    errors.append(msg)


def add_suberror(msg, errors):
    """Add sub error, ie. error indented by 1 level ("\t"), to the list of errors."""
    errors.append("\t{0}".format(msg))


def look_for_fixme(func):
    '''Decorator to fail test if text argument starts with "FIXME".'''
    def inner(arg):
        if (arg is not None) and \
           isinstance(arg, str) and \
           arg.lstrip().startswith('FIXME'):
            return False
        return func(arg)
    return inner


@look_for_fixme
def check_layout(layout):
    '''"layout" in YAML header must be "workshop".'''

    return layout == 'workshop'


@look_for_fixme
def check_carpentry(layout):
    '''"carpentry" in YAML header must be "dc" or "swc".'''

    return layout in CARPENTRIES


@look_for_fixme
def check_country(country):
    '''"country" must be a lowercase ISO-3166 two-letter code.'''

    return country in ISO_COUNTRY


@look_for_fixme
def check_language(language):
    '''"language" must be a lowercase ISO-639 two-letter code.'''

    return language in ISO_LANGUAGE


@look_for_fixme
def check_humandate(date):
    '''"humandate" must be a human-readable date with a 3-letter month and
    4-digit year.  Examples include "Feb 18-20, 2025" and "Feb 18 and
    20, 2025".  It may be in languages other than English, but the
    month name should be kept short to aid formatting of the main
    Software Carpentry web site.'''

    if "," not in date:
        return False

    month_dates, year = date.split(",")

    # The first three characters of month_dates are not empty
    month = month_dates[:3]
    if any(char == " " for char in month):
        return False

    # But the fourth character is empty ("February" is illegal)
    if month_dates[3] != " ":
        return False

    # year contains *only* numbers
    try:
        int(year)
    except:
        return False

    return True


@look_for_fixme
def check_humantime(time):
    '''"humantime" is a human-readable start and end time for the workshop,
    such as "09:00 - 16:00".'''

    return bool(re.match(HUMANTIME_PATTERN, time.replace(" ", "")))


def check_date(this_date):
    '''"startdate" and "enddate" are machine-readable start and end dates for
    the workshop, and must be in YYYY-MM-DD format, e.g., "2015-07-01".'''

    from datetime import date
    # yaml automatically loads valid dates as datetime.date
    return isinstance(this_date, date)


@look_for_fixme
def check_latitude_longitude(latlng):
    '''"latlng" must be a valid latitude and longitude represented as two
    floating-point numbers separated by a comma.'''

    try:
        lat, lng = latlng.split(',')
        lat = float(lat)
        long = float(lng)
    except ValueError:
        return False
    return (-90.0 <= lat <= 90.0) and (-180.0 <= long <= 180.0)


def check_instructors(instructors):
    '''"instructor" must be a non-empty comma-separated list of quoted names,
    e.g. ['First name', 'Second name', ...'].  Do not use "TBD" or other
    placeholders.'''

    # yaml automatically loads list-like strings as lists
    return isinstance(instructors, list) and len(instructors) > 0


def check_helpers(helpers):
    '''"helper" must be a comma-separated list of quoted names,
    e.g. ['First name', 'Second name', ...'].  The list may be empty.  Do
    not use "TBD" or other placeholders.'''

    # yaml automatically loads list-like strings as lists
    return isinstance(helpers, list) and len(helpers) >= 0


@look_for_fixme
def check_email(email):
    '''"contact" must be a valid email address consisting of characters, a
    @, and more characters.  It should not be the default contact
    email address "admin@software-carpentry.org".'''

    return bool(re.match(EMAIL_PATTERN, email)) and \
           (email != DEFAULT_CONTACT_EMAIL)


def check_eventbrite(eventbrite):
    '''"eventbrite" (the Eventbrite registration key) must be 9 or more digits.'''

    if isinstance(eventbrite, int):
        return True
    else:
        return bool(re.match(EVENTBRITE_PATTERN, eventbrite))


@look_for_fixme
def check_etherpad(etherpad):
    '''"etherpad" must be a valid URL.'''

    return bool(re.match(URL_PATTERN, etherpad))


@look_for_fixme
def check_pass(value):
    '''This test always passes (it is used for "checking" things like
    addresses, for which no sensible validation is feasible).'''

    return True


HANDLERS = {
    'layout':     (True, check_layout, 'layout isn\'t "workshop"'),

    'carpentry':  (True, check_carpentry, 'carpentry isn\'t in ' +
                   ', '.join(CARPENTRIES)),

    'country':    (True, check_country,
                   'country invalid: must use lowercase two-letter ISO code ' +
                   'from ' + ', '.join(ISO_COUNTRY)),

    'language':   (False,  check_language,
                   'language invalid: must use lowercase two-letter ISO code' +
                   ' from ' + ', '.join(ISO_LANGUAGE)),

    'humandate':  (True, check_humandate,
                   'humandate invalid. Please use three-letter months like ' +
                   '"Jan" and four-letter years like "2025".'),

    'humantime':  (True, check_humantime,
                   'humantime doesn\'t include numbers'),

    'startdate':  (True, check_date,
                   'startdate invalid. Must be of format year-month-day, ' +
                   'i.e., 2014-01-31.'),

    'enddate':    (False, check_date,
                   'enddate invalid. Must be of format year-month-day, i.e.,' +
                   ' 2014-01-31.'),

    'latlng':     (True, check_latitude_longitude,
                   'latlng invalid. Check that it is two floating point ' +
                   'numbers, separated by a comma.'),

    'instructor': (True, check_instructors,
                   'instructor list isn\'t a valid list of format ' +
                   '["First instructor", "Second instructor",..].'),

    'helper':     (True, check_helpers,
                   'helper list isn\'t a valid list of format ' +
                   '["First helper", "Second helper",..].'),

    'contact':    (True, check_email,
                   'contact email invalid or still set to ' +
                   '"{0}".'.format(DEFAULT_CONTACT_EMAIL)),

    'eventbrite': (False, check_eventbrite, 'Eventbrite key appears invalid.'),

    'etherpad':   (False, check_etherpad, 'Etherpad URL appears invalid.'),

    'venue':      (False, check_pass, 'venue name not specified'),

    'address':    (False, check_pass, 'address not specified')
}

# REQUIRED is all required categories.
REQUIRED = set([k for k in HANDLERS if HANDLERS[k][0]])

# OPTIONAL is all optional categories.
OPTIONAL = set([k for k in HANDLERS if not HANDLERS[k][0]])


def check_validity(data, function, errors, error_msg):
    '''Wrapper-function around the various check-functions.'''
    valid = function(data)
    if not valid:
        add_error(error_msg, errors)
        add_suberror('Offending entry is: "{0}"'.format(data), errors)
    return valid


def check_blank_lines(raw_data, errors, error_msg):
    '''Blank lines are not allowed in category headers.'''
    lines = [x.strip() for x in raw_data.split('\n')]
    if '' in lines:
        add_error(error_msg, errors)
        add_suberror('{0} blank lines found in header'.format(lines.count('')), errors)
        return False
    return True


def check_categories(left, right, errors, error_msg):
    '''Report set difference of categories.'''
    result = left - right
    if result:
        add_error(error_msg, errors)
        add_suberror('Offending entries: {0}'.format(result), errors)
        return False
    return True


def get_header(text):
    '''Extract YAML header from raw data, returning (None, None) if no
    valid header found and (raw, parsed) if header found.'''

    # YAML header must be right at the start of the file.
    if not text.startswith('---'):
        return None, None

    # YAML header must start and end with '---'
    pieces = text.split('---')
    if len(pieces) < 3:
        return None, None

    # Return raw text and YAML-ized form.
    raw = pieces[1].strip()
    return raw, yaml.load(raw)


def check_file(filename, data, errors):
    '''Get header from file, call all other functions and check file
    for validity. Return list of errors (empty when no errors).'''

    raw, header = get_header(data)
    if header is None:
        msg = ('Cannot find YAML header in given file "{0}".'.format(filename))
        add_error(msg, errors)
        return errors

    # Do we have any blank lines in the header?
    is_valid = check_blank_lines(raw, errors,
                                 'There are blank lines in the header')

    # Look through all header entries.  If the category is in the input
    # file and is either required or we have actual data (as opposed to
    # a commented-out entry), we check it.  If it *isn't* in the header
    # but is required, report an error.
    for category in HANDLERS:
        required, handler_function, error_message = HANDLERS[category]
        if category in header:
            if required or header[category]:
                is_valid &= check_validity(header[category],
                                           handler_function, errors,
                                           error_message)
        elif required:
            msg = 'index file is missing mandatory key "{0}"'.format(category)
            add_error(msg, errors)
            is_valid = False

    # Check whether we have missing or too many categories
    seen_categories = set(header.keys())

    is_valid &= check_categories(REQUIRED, seen_categories, errors,
                                 'There are missing categories')

    is_valid &= check_categories(seen_categories, REQUIRED.union(OPTIONAL),
                                 errors, 'There are superfluous categories')


def check_config(filename, errors):
    '''Check YAML configuration file.'''

    with open(filename, 'r') as reader:
        config = yaml.load(reader)

    if config['kind'] != 'workshop':
        msg = 'Not configured as a workshop: found "{0}" instead'.format(config['kind'])
        add_error(msg, errors)


def main():
    '''Run as the main program.'''

    if len(sys.argv) != 2:
        print(USAGE, file=sys.stderr)
        sys.exit(1)

    root_dir = sys.argv[1]
    index_file = os.path.join(root_dir, 'index.html')
    config_file = os.path.join(root_dir, '_config.yml')
    logger.info('Testing "{0}" and "{1}"'.format(index_file, config_file))

    errors = []
    check_config(config_file, errors)
    with open(index_file) as reader:
        data = reader.read()
        check_file(index_file, data, errors)

    if errors:
        for m in errors:
            logger.error(m)
        sys.exit(1)
    else:
        logger.info('Everything seems to be in order')
        sys.exit(0)


if __name__ == '__main__':
    main()
