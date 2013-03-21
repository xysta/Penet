Penet
=====

node.js - [Penet](https://github.com/synee/Penet/tree/master/node_module/penet)

* ## boot (启动器)
    #### Boot
    ```javascript
    module.exports = function(){
        var me = this;
        me.render("index.html");
    }
    ```
    #### BootCollection
    > 存放启动器的容器。
    > 会被附着在 Penet 上。 
    > 一般情况下开发不需要它。
    ```javascript

    ```

* ## core (内核)
    #### Cookie
    > 
    #### doMessage
    > 这是一个处理请求的函数，相当于一个过滤器，多请求进行预先处理，得到一些经加工的数据。
    #### render
    > 渲染数据,以客户端想要的数据形式发送
    ```javascript
    function(){
        var me = this;
        me.render("index.html");
    }
    ```
    #### Session
    > 

* ## handle (处理器)
    #### Handle
    As
    > UserHandle.js
    ```javascript
    module.exports = {
        save: function(){
            var me = this;
            me.attrs = {
                result: true,
                message: {
                    username: me.incomingMessage.params.message.username
                }
            }
            this.render();
        }
    };
    ```
    #### HandleCollection

* ## penet (全局)
    * VERSION       版本号
    * boots         启动器集合
    * compiler      模板编译器
    * cookie        cookie        
    * encoding      编码
    * handles       处理器
    * session       会话
    * static_dir    静态目录

    #### addBoot(url,boot)
    ```javascript
    penet.addBoot("/",require("./boot"))
    ```
    #### addHandle(key,handle)
    ```javascript
    penet.addHandle("user", require('./handle/user'));
    ```
    #### static(options)
    ```javascript
    penet.setEnv({
        static_dir: __dirname + "/static"
    });
    ```

* ## util (工具)
    * #### logger

        * debug
        * error
        * info
        * log
        * warn
