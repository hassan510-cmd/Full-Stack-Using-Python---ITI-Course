

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


