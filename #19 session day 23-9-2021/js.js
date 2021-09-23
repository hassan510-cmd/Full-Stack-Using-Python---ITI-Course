

$("#img").hover(function () {
        $(this).addClass("tg");
        $("#cap").css({"display":"inline"})
        
    }, function () {
        $(this).removeClass("tg");
        $("#cap").css("display","none")
    }
);("tg");

$(".sdiv").hover(function () {
    $(this).addClass("lsdiv");
    $(this).children().last().css({"display":"block","color":"red"})
    // $("#cap").css({"display":"inline"})
    
}, function () {
    $(this).removeClass("lsdiv");
    $(this).children().last().css({"display":"none","color":"black"})
    // $("#cap").css("display","none")
}
);("lsdiv");