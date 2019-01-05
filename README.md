# es6-dynamic-class-extends

[![Travis CI](https://travis-ci.com/peccu/es6-dynamic-class-extends.svg)](https://travis-ci.com/peccu/es6-dynamic-class-extends)
[![Coverage Status](https://coveralls.io/repos/github/peccu/es6-dynamic-class-extends/badge.svg)](https://coveralls.io/github/peccu/es6-dynamic-class-extends)
[![codecov](https://codecov.io/gh/peccu/es6-dynamic-class-extends/branch/master/graph/badge.svg)](https://codecov.io/gh/peccu/es6-dynamic-class-extends)
[![CircleCI](https://circleci.com/gh/peccu/es6-dynamic-class-extends.svg?style=svg)](https://circleci.com/gh/peccu/es6-dynamic-class-extends)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c67a28c9de7c49caa38190961a4bc868)](https://www.codacy.com/app/peccu/es6-dynamic-class-extends)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/c67a28c9de7c49caa38190961a4bc868)](https://www.codacy.com/app/peccu/es6-dynamic-class-extends)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

example from [Dynamic super classes (extends) in ES6 – MikeDoesWeb](https://www.mikedoesweb.com/2017/dynamic-super-classes-extends-in-es6/) with test.

## Test result

```
$ npm test

> es6-dynamic-class-extends@1.0.0 test /path/to/es6-dynamic-class-extends
> jest

 PASS  ./dynamic.test.js
  Dynamically switching parent class
    ✓ non specified class (35ms)
    ✓ extends FS (9ms)
    ✓ extends BrowserFS (11ms)

  console.log dynamic.js:26
    Plain constructor called with { wd: 'test' }

  console.log dynamic.js:30
    current working directory is test

  console.log dynamic.js:4
    FS constructor called with { wd: 'test', backend: 'fs' }

  console.log dynamic.js:42
    dynamically extended FS

  console.log dynamic.js:8
    current working directory is /path/to/es6-dynamic-class-extends/test

  console.log dynamic.js:15
    BrowserFS constructor called with { wd: 'test', backend: 'browserfs' }

  console.log dynamic.js:52
    dynamically extended BrowserFS

  console.log dynamic.js:19
    current working directory is /test

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.725s, estimated 2s
Ran all test suites.
```
