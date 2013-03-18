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

    this.render = obj.render || function(fn){
        if(fn) fn();
        return this.attrs;
    }

    for(k in obj){
        this[k]  = obj[k];
    }
}


module.exports = {
    Model:Model,
    ModelCollection: ModelCollection
}