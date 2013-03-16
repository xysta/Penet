var underscore = require("./underscore");

util = {}

util.extend = function(target, src, skipArr){
    var skipArr = typeof skipArr == "Array" ? skipArr : [];
    for(k in src){
        if (! _.contains(skipArr, k)) target[k] = src[k];
    }
};
