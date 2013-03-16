var http = require("http");
var fs   = require("fs");

var Penet  = function(options){
    this.VERSION = "0.0.1";

    this.encoding = "UTF-8";

    this.models = [];

    this.static = function(dir){
        this.static_dir = dir;
    };
};

Penet.prototype.start =  function(port){
    var me = this;
    var server = http.createServer(function(requst, response){
        var pamas = {};

        ({
            "GET": function(){

            }
        })[requst.method]()

        try{
            fs.readFile(me.static_dir + requst.url, {
                encoding: me.encoding
            },function(err, data){
                try{
                    response.write(new Buffer(data).toString(me.encoding));
                    response.end();
                }catch (err){
                    response.writeHead(404,"text/application");
                    response.write(requst.method + "\t" + requst.url);
                    response.end();
                }
            });
        }catch (err){
            response.writeHead(404,"text/application");
            response.write(({
                code: 404,
                message: "no data you need!"
            }).toString());
            response.end();
        }
    });
    if(!port) port = 3000;
    server.listen(port);
};

module.exports = Penet;

