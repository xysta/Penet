$(document).ready(function(){
    $("#post").click(function(){
        $.get("/",{
            model: "user",
            fn: "save",
            message: {
                result: true,
                code: 200,
                "message": {
                    result: true,
                    code: 200,
                    message: "[信息]"
                }
            }
        },function(data){
            console.log(data);
        })
    });
});