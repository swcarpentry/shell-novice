import unittest

import lesson_check
import reporter


class TestFileList(unittest.TestCase):
    def setUp(self):
        self.reporter = reporter.Reporter()  # TODO: refactor reporter class.

    def test_file_list_has_expected_entries(self):
        # For first pass, simply assume that all required files are present

        lesson_check.check_fileset('', self.reporter, lesson_check.REQUIRED_FILES)
        self.assertEqual(len(self.reporter.messages), 0)


if __name__ == "__main__":
    unittest.main()
