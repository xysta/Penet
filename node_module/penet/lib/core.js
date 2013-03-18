var queryString = require('querystring');
var url = require("url");

/**
 * @param requestData
 * for requestData as style
 *
 *  example
 *  { model: 'user',
 *    fn: 'save',
 *    'message[result]': 'true',
 *    'message[code]': '200',
 *    'message[message][result]': 'true',
 *    'message[message][code]': '200',
 *    'message[message][message]': '[信息]' }
 *
 *  to data as style
 *  {
 *      model: "user",
 *      fn: "save",
 *      message: {
 *          result: true,
 *          code: 200,
 *          "message": {
 *              result: true,
 *              code: 200,
 *          message: "[信息]"
 *          }
 *      }
 *  }
 * @returns {{}}
 */
var data2JSON = function(requestData){
    var params = {};
    var loop = function(keys, value, index, params){
        if(index == keys.length -1){
            params = value;
            return params;
        }else {
            params = params || {};
            params[keys[index+1]] = loop(keys, value, index +1, params[keys[index+1]]);
            return params;
        }
    }
    for(key in requestData){
        var keys = key.split(/\[|\]\[|\]/g);
        if(keys[keys.length - 1] == "") keys = keys.slice(0,keys.length - 1);
        params[keys[0]] = loop(keys, requestData[key], 0, params[keys[0]]);
    }
    return params;
}

module.exports = {
    doRequest: function(request, end){
        request.setEncoding("utf8");
        if (request.method = "GET"){
            end(data2JSON(queryString.parse(url.parse(request.url).query)));
        } else if(request.method = "POST"){
            var params = {};
            var requestData = "";
            request.addListener("data", function(dataChunk) {
                requestData += dataChunk;
            });
            request.addListener("end", function() {
                for(k in queryString.parse(requestData)) params[k] = queryString.parse(requestData)[k];
                end(data2JSON(queryString.parse(requestData)));
            });
        }
    }
}