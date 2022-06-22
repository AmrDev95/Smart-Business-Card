let toggler =0;
let notificationToggler =0;

$ ("#addAction").mouseenter(function(){
    $("#addActionImg").attr("src", "images/star-dynamic-premium.png");
});

$ ("#addAction").mouseleave(function(){
    $("#addActionImg").attr("src", "images/star-dynamic-clay.png");
});

$ ("#statistics").mouseenter(function(){
    $("#statisticsImg").attr("src", "images/chart-dynamic-premium.png");
});

$ ("#statistics").mouseleave(function(){
    $("#statisticsImg").attr("src", "images/chart-dynamic-clay.png");
});

$ ("#settings").mouseenter(function(){
    $("#settingsImg").attr("src", "images/setting-dynamic-premium.png");
});

$ ("#settings").mouseleave(function(){
    $("#settingsImg").attr("src", "images/setting-dynamic-clay.png");
});

$ ("#chat").mouseenter(function(){
    $("#chatImg").attr("src", "images/chat-text-dynamic-premium.png");
});

$ ("#chat").mouseleave(function(){
    $("#chatImg").attr("src", "images/chat-text-dynamic-clay.png");
});

$ ( "#status" ).click(function(){
    if(toggler==0){
        $( "#activeStatus" ).html("Deactivated");
        $("#statusImg").attr("src",'images/bell-dynamic-color.png' );
        $(".activeHover").css("background-color", "rgb(203,68,74)");
        $(".activehover").css("border", "2px solid rgb(203,68,74)");
        toggler = 1;
    }

    else{
        $( "#activeStatus" ).html("Active");
        $("#statusImg").attr("src",'images/bell-dynamic-premium.png' );
        $(".activeHover").css("background-color", "var(--main-color)");
        $(".activehover").css("border", "2px solid var(--main-color)");
        toggler = 0;
    }
});

$( "#notificationButton" ).click(function(){
    let notificationSize = $("#notificationDiv").css("width");
    if(notificationToggler==0){
        $("#notificationDiv").animate({right: notificationSize}, 500);
        notificationToggler=1;
        console.log("hello");
    }

    else{
        $("#notificationDiv").animate({right : "0"}, 500);
        notificationToggler=0;
        console.log("aaaa");
    }
});

$("#notificationDropDown").click(function(){
    $("#notificationButtons").slideToggle(500);
});
