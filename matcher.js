var matcher = function (str, possib) {
    var i = 0, n = possib.length;
    for (i; i < n; i += 1) {
        var tuple = possib[i];
        var re = new RegExp(tuple[0]);
        if (str.match(re)) {
            return tuple[1];
        }
    }

    return '';
}

module.exports = matcher;