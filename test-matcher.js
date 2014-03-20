var matcher = require('./matcher');
var assert = require('assert');

describe('The Matcher,', function () {
    it('should be sane', function () {
        assert.equal(true, true);
        assert.equal(!!matcher, true);
    });

    it('should match stuff', function () {

        var possibilities = [
            ['fffu', 'case'],
            ['regex', 'case2']
        ];
        var str = 'i have a regex2 case here';
        var caseMatched = matcher(str, possibilities)

        assert.equal(caseMatched, 'case2');

    });
});