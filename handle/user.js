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