# es6-dynamic-class-extends

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
