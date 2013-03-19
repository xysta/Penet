
var Penet = require("penet");
var penet = new Penet();

penet.addBoot("/",require("./boot"));
penet.addHandle("GET", "user", require('./handle/user'));

penet.static(__dirname + "/static");
penet.start(3003);