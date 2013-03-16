var underscore = require("./underscore");

util = {}

util.extend = function(target, src, skipArr){
    var skipArr = typeof skipArr == "Array" ? skipArr : [];
    for(k in src){
        if (! _.contains(skipArr, k)) target[k] = src[k];
    }
};

util.logger = {
    debug: function(message){
        console.debug(message || "undefined message");
    },

    log: function(message){
        console.log(message || "undefined message");
    },

    info: function(message){
        console.info(message || "undefined message");
    },

    warn: function(message){
        console.warn(message || "undefined message");
    },

    error: function(message){
        console.error(message || "undefined message");
    }
}



module.exports = util;
