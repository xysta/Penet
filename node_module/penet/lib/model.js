var ModelCollection = function(){

    this["HEAD"] = {};
    this["GET"] = {};
    this["POST"] = {};
    this["PUT"] = {};
    this["DELETE"] = {};



}

var Model = function(obj){

    this.attrs = {};

    this.toJSON = function(){
        return JSON.stringify(this.attrs);
    };

    this.render = function(){
        return this.toJSON();
    }
}


module.exports = {
    Model:Model,
    ModelCollection: ModelCollection
}