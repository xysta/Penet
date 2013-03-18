$(document).ready(function(){
    $("#post").click(function(){
        $.get("/",{
            handle: "user",
            method: "save",
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