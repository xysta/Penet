
var Penet = require("penet");
var penet = new Penet();

penet.addModel("GET", "user", require('./model/user'));

penet.static(__dirname + "/static");
penet.start(3003);