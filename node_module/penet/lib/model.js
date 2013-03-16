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
    }
}

Model.extend = function(){
    return;
}

module.exports = {
    ModelCollection: ModelCollection
}