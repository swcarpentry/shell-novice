import sys

class Reporter:
    """Collect and report errors."""

    # Marker to show that an expected value hasn't been provided.
    # (Can't use 'None' because that might be a legitimate value.)
    _DEFAULT_REPORTER = []

    def __init__(self):
        """Constructor."""
        self.messages = []

    def check_field(self, filename, name, values, key, expected=_DEFAULT_REPORTER):
        """Check that a dictionary has an expected value."""

        if key not in values:
            self.add(filename, '{0} does not contain {1}', name, key)
        elif expected is self._DEFAULT_REPORTER:
            pass
        elif type(expected) in (tuple, set, list):
            if values[key] not in expected:
                self.add(
                    filename, '{0} {1} value {2} is not in {3}', name, key, values[key], expected)
        elif values[key] != expected:
            self.add(filename, '{0} {1} is {2} not {3}',
                     name, key, values[key], expected)

    def check(self, condition, location, fmt, *args):
        """Append error if condition not met."""

        if not condition:
            self.add(location, fmt, *args)

    def add(self, location, fmt, *args):
        """Append error unilaterally."""

        self.messages.append((location, fmt.format(*args)))

    @staticmethod
    def pretty(item):
        location, message = item
        if isinstance(location, type(None)):
            return message
        elif isinstance(location, str):
            return location + ': ' + message
        elif isinstance(location, tuple):
            return '{0}:{1}: '.format(*location) + message

        print('Unknown item "{0}"'.format(item), file=sys.stderr)
        return NotImplemented

    @staticmethod
    def key(item):
        location, message = item
        if isinstance(location, type(None)):
            return ('', -1, message)
        elif isinstance(location, str):
            return (location, -1, message)
        elif isinstance(location, tuple):
            return (location[0], location[1], message)

        print('Unknown item "{0}"'.format(item), file=sys.stderr)
        return NotImplemented

    def report(self, stream=sys.stdout):
        """Report all messages in order."""

        if not self.messages:
            return

        for m in sorted(self.messages, key=self.key):
            print(self.pretty(m), file=stream)


