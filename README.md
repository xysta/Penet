Penet
=====

node.js - [Penet](https://github.com/synee/Penet/tree/master/node_module/penet)

### Get Start
```javascript
var Penet = require("./node_module/penet");
var penet = new Penet();
penet.static(__dirname + "/static");
penet.start(3003);
```

#### app start

  > penet.start(port)


#### static file config
  penet.static(path) 
  
  As e.g
  > the dir in project root dir
  > * web_root
  >   * static (static files in)
  >   * app.js
  
  ```javascript
  penet.static(__dirname + "/static");
  ```
