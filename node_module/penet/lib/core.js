var url = require("url");

module.exports = {
    doRequest: function(request, end){
        end(url.parse(request.url).query);
    }
}