var http = require("http"),
    fs   = require("fs"),
    util = require("./util"),
    url  = require("url"),
    queryString = require("querystring"),
    core = require("./core"),
    Model = require('./model').Model,
    ModelCollection = require("./model").ModelCollection,
    doRequest = core.doRequest;



var Penet  = function(options){
    this.VERSION = "0.0.1";

    this.encoding = "UTF-8";

    this.models = new ModelCollection();

    this.addModel = function(method, modelName ,model){
        this.models[method][modelName] = model;
    };

    this.static = function(dir){
        this.static_dir = dir;
    };
};

Penet.prototype.start =  function(port){
    var me = this;
    var server = http.createServer(function(requst, response){
        doRequest(requst,function(params){

            /**
             *
             */

            var model = new Model(me.models[requst.method][params.model]);
            model[params.fn]();
            model.render();
            console.log(model);

            try{
                fs.readFile(me.static_dir + url.parse(requst.url).pathname, {
                    encoding: me.encoding
                },function(err, data){
                    try{
                        response.write(new Buffer(data).toString(me.encoding));
                        response.end();
                    }catch (err){
                        response.writeHead(404,"text/application");
                        response.write(JSON.stringify(url.parse(requst.url)));
                        response.end();
                    }
                });
            }catch (err){
                response.writeHead(404,"text/application");
                response.write(JSON.stringify(url.parse(requst.url)));
                response.end();
            }
        });
    });
    if(!port) port = 3000;
    server.listen(port);
};

module.exports = Penet;

