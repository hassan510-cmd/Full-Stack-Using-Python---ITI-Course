$(".start").css({ "color": "red", "text-align": "center" })

// $("td:first").css({ "color": "red" })
$("td:odd").css({ "color": "red" })
$("td:even").css({ "color": "blue" })
$(window).resize(function () {
    console.log("55555");
});

$("#btnT").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("btn2");
});

// $("#mydiv").animate({ "width": "100px" }, 2000).animate({ "height": "100px" }, 2000)

$("#stbtn").click(function () {
    $("#di2").animate({ "width": "100px" }, 2000).animate({ "height": "100px" }, 2000)
})

$("#opbtn").click(() => {
    $("#di2").stop(true, false)
})
let x = 0
let y = 0
let inc = 40
$(document).keydown(function (e) {
    if (e.code == "ArrowRight") {
        // $("#mybik").animate({ left: "+=10px" }, 100)

        $("#mybik").css("transform", `translate(${x += inc}px,${y}px)`)
        console.log(x, $(window).width());
        if ($("#mybik").css("left") >= `${$(window).width()}px`) {
            console.log("assadsad");
        }
        console.log($("#mybik").css("left"));
    }
    else if (e.code == "ArrowLeft") {
        // $("#mybik").css({ left: "-=incpx" })

        $("#mybik").css("transform", `translate(${x -= inc}px,${y}px)`)
    }
    else if (e.code == "ArrowUp") {
        // $("#mybik").css({ top: "-=incpx" })
        $("#mybik").css("transform", `translate(${x}px,${y -= inc}px)`)
    }
    else if (e.code == "ArrowDown") {
        $("#mybik").css("transform", `translate(${x}px,${y += inc}px)`)
        // $("#mybik").css({ top: "+=10px" })
    }

});


let my_pic = [1, 2, 3, 4, 5, 6]
let index = 0
console.log(my_pic.length);
$("#left").click(() => {
    if ((index + 1) == my_pic.length) {
        console.log("no more", index);
        index = 0
        $("#current_image")
            .fadeOut(400, function () {
                $("#current_image").attr('src', `b${my_pic[index]}.png`);
            })
            .fadeIn(400);
    }
    else {

        $("#current_image")
            .fadeOut(400, function () {
                $("#current_image").attr('src', `b${my_pic[index += 1]}.png`);
            })
            .fadeIn(400);
        // $("#current_image").css("transform", `translate(${-100}px,${0}px)`)
        console.log(index);
    }

})

$("#right").click(() => {
    if ((index - 1) < 0) {
        console.log("no more", index);
        index = my_pic.length - 1
        $("#current_image")
            .fadeOut(400, function () {
                $("#current_image").attr('src', `b${my_pic[index]}.png`);
            })
            .fadeIn(400);
    }
    else {

        // $("#current_image").attr("src", `b${my_pic[index -= 1]}.png`)
        // console.log(index);
        $("#current_image")
            .fadeOut(400, function () {
                $("#current_image").attr('src', `b${my_pic[index -= 1]}.png`);
            })
            .fadeIn(400);


    }

})


