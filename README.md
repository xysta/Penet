Penet
=====

node.js - Penet

### Get Start
```javascript
var Penet = require("./node_module/penet");
var penet = new Penet();
penet.static(__dirname + "/static");
penet.start(3003);
```
#### static file config
  static(path) 
  
  As e.g
  > the dir in project root dir
  > * web_root
  >   * static (static files in)
  >   * app.js
  
  ```javascript
  penet.static(__dirname + "/static");
  ```
