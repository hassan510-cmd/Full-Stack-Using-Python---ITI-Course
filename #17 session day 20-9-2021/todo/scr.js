let flg = 1
$("#addtask").click(() => {
    if ($("#inputfield").val() == "") {
        alert("you should insert task");
    }
    else {
        var donebtn = `<button id="donbtn" style="float: right;"> done</button>`
        var deletebtn = `<button id="deletebtn" style="float: right;margin-left: 10px;">Delete</button>`
        var noteElement =
            `
            <div id="noteelement_${flg}" class="text-center" 
            style="background-color: antiquewhite
            ;margin-bottom: 15px;
            padding: 20px;
            border-radius:10px ;
            ">
            ${$("#inputfield").val()}
            ${deletebtn}
            ${donebtn}
            </div>
        `
        $("#inputfield").val("")
        $(document.body).append(noteElement)

        $(`#noteelement_${flg} #deletebtn`).click(function () {
            console.log("asdsadsa");
            if (confirm("Do you want to delete this one !")) {
                $(this).parent().remove()
            }
        });
    }
    $(`#noteelement_${flg} #donbtn`).click(function () {
        if ($(this).parent().css("text-decoration").split(" ")[0] == "none") {
            $(this).text("undo")
            $(this).parent().css({ "text-decoration": "line-through", "background-color": "rgb(245, 164, 159)" });
        }
        else {
            $(this).text("done")
            $(this).parent().css({ "text-decoration": "none", "background-color": "antiquewhite" });
        }
    });
    flg += 1
});
