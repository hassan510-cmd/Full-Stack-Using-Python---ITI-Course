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
let active = null
for (let element of $("#mybik2,#mybik,#slide")) {
    console.log(element);
    $(element).click(function () {
        let id = $(this).attr("id")
        // console.log($(this).attr("id"));
        active = `#${id}`
        console.log(active);
    })
}

$(document).keydown(function (e) {
    if (active) {
        var transformMatrix = $(active).css("transform")
        var matrix = transformMatrix.replace(/[^0-9\-.,]/g, '').split(',');
        var x = matrix[12] || matrix[4] || 0;//translate x
        var y = matrix[13] || matrix[5] || 0;//translate y
        console.log("top", x, "left", y);
        x = Number(x)
        y = Number(y)
        if (e.code == "ArrowRight") {
            $(active).css("transform", `translate(${x += inc}px,${y}px)`)
        }
        else if (e.code == "ArrowLeft") {
            $(active).css("transform", `translate(${x -= inc}px,${y}px)`)
        }
        else if (e.code == "ArrowUp") {
            $(active).css("transform", `translate(${x}px,${y -= inc}px)`)
        }
        else if (e.code == "ArrowDown") {
            $(active).css("transform", `translate(${x}px,${y += inc}px)`)
        }
    }
});

// --------------------------------------
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
        // console.log(index);
    }

})

setInterval(() => {
    $("#left").trigger("click");
}, 2000);

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


