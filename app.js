
var Penet = new require("./node_module/penet");
var penet = new Penet();
penet.static(__dirname + "/static");
penet.start(3000);