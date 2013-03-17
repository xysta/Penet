var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf8');
var queryString = require('querystring');

var url = require("url");


var data2JSON = function(requestData){

    var params = {};
    var loop = function(strArr, value, index){
        var obj;
        if(index == strArr.length -1){

        }else{
            obj = value;
        }
        return obj;
    }
    /**
     * 将每一行的 “[” “]” 替换成 “.” ,
     * { model: 'user',
     *    fn: 'save',
     *    'message[result]': 'true',
     *    'message[code]': '200',
     *    'message[message][result]': 'true',
     *    'message[message][code]': '200',
     *    'message[message][message]': '[信息]' }
     *
     */
    for(key in requestData){
        params[key.split("[")[0]] = loop(key.split("["),requestData,key.split("[").length - 1);
    }

    console.log(params);

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
            end(queryString.parse(requestData));
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