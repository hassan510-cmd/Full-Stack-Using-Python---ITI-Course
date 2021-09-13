var divElement = document.createElement("div");
divElement.style.paddingBottom = "20px";
var Addbuntton = document.createElement('button');
Addbuntton.textContent = "Add"
var input_field = document.createElement("input");
input_field.setAttribute("type", "text");

input_field.setAttribute("placeholder", "Enter your Task");
input_field.style.marginRight = "20px";
Addbuntton.addEventListener("click", function () {
    if (input_field.value == "") {
        alert("you should insert task");
    }
    else {
        var deletebtn = document.createElement('button');
        deletebtn.textContent = "Delete"
        var donebtn = document.createElement("button");
        donebtn.textContent = "done"
        deletebtn.style.float = "right"
        deletebtn.style.marginLeft = "10px"
        donebtn.style.float = "right"
        var noteElement = document.createElement("div");
        noteElement.setAttribute("class", "text-center");
        noteElement.style.backgroundColor = "antiquewhite";
        noteElement.style.marginBottom = "15px";
        noteElement.style.padding = "20px";
        deletebtn.addEventListener("click", function () {
            if (confirm("Do you want to delete this one !")) {
                console.log("ok");
                noteElement.remove(noteElement);
            }
            else {
                console.log("no");
            }
        });
        donebtn.addEventListener("click", function () {
            console.log("asdsad");
            if (noteElement.style.textDecoration == "line-through") {
                noteElement.style.textDecoration = "none"
                donebtn.textContent = "done"
                noteElement.style.backgroundColor = "antiquewhite";
            }
            else {
                noteElement.style.textDecoration = "line-through"
                donebtn.textContent = "undo"
                noteElement.style.backgroundColor = "rgb(245, 164, 159)";
            }
        });
        noteElement.textContent = input_field.value
        noteElement.appendChild(deletebtn);
        noteElement.appendChild(donebtn);
        noteElement.style.visibility = "visible";
        input_field.value = null;
        document.body.appendChild(noteElement);
    }
});
divElement.appendChild(input_field);
divElement.appendChild(Addbuntton);
document.body.appendChild(divElement);