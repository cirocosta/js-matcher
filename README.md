# Js Matcher

> It matches stuff based on regex.

## Quickstart

Simple: pass to the matcher a **String** - what you'll test against -  and a **list of lists** - which describes the possibilities and the case to return.

```javascript
var matcher = require('./matcher');

var possibilities = [
    ['fffu', 'case1'],
    ['regex', 'case2'],
    ['bar', 'case3']
];
var str = 'i have a 1regex2 case here';

switch (matcher(str, possibilities)) {
    case 'case1':
        // do something ...
    case 'case2':
        // do something
        break;
}
```

*For any questions on functionality, check the tests/code.*

## Hack it

Tests are cool and are located at `test-matcher.js`. While developing, run `mocha --watch test-matcher.js -R nyan` for a great experience with it.

This is stuff for everyone. Get it and do whatever you want (including fork/PRs - which are awesome).

**MIT License**
