import requestTests from './verify';
import checkTests from './check';
import cancelTests from './cancel';
import nextTests from './next';

export default [
  {
    label: 'Request tests',
    tests: requestTests,
  },
  {
    label: 'Check tests',
    tests: checkTests,
  },
  {
    label: 'Cancel tests',
    tests: cancelTests,
  },
  {
    label: 'Next tests',
    tests: nextTests,
  },
];
