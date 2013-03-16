var http = require("http");
var fs   = require("fs");

var Penet  = function(options){
    this.VERSION = "0.0.1";

    this.static = function(dir){
        this.static_dir = dir;
        console.log(this);
    };

    this.start = function(port){
        var me = this;
        var server = http.createServer(function(requst, response){
            response.writeHead(200, {"Content-Type": "text/html"});
            console.log(me.static_dir + requst.url);
            fs.readFile(me.static_dir + requst.url, {
                encoding: me.encoding || "UTF-8"
            },function(err, data){
                response.write(new Buffer(data).toString("UTF-8"));
                response.end();
            });
        });
        if(!port) port = 3000;
        server.listen(port);
    };
};

module.exports = Penet;

