var matcher = require('./matcher');
var assert = require('assert');

describe('The Matcher,', function () {
    it('should be sane', function () {
        assert.equal(true, true);
        assert.equal(!!matcher, true);
    });
});