var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf8');
var queryString = require('querystring');

var url = require("url");


var data2JSON = function(requestData){
    var params = {};
    for(k in requestData){
        params[k] = requestData[k];
    }
    return params;
}

module.exports = {
    doRequest: function(request, end){
        var requestData = "";
        var params = {};
        request.setEncoding("utf8");
        if (request.method = "GET"){
            requestData = url.parse(request.url).query;
            params = data2JSON(queryString.parse(requestData));
            end(queryString.parse(postData));
        } else if(request.method = "POST"){
            request.addListener("data", function(postDataChunk) {
                requestData += postDataChunk;
            });
            request.addListener("end", function() {
                for(k in queryString.parse(requestData)){
                    params[k] = queryString.parse(requestData)[k];
                }
                console.log('params:');
                console.log(params);
                end(queryString.parse(requestData));
            });
        }

    }
}