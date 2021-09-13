// let nmubers = [5, 10, 20, 30]

// // confirm(Math.max(...nmubers))

// let [n1, n2] = nmubers
// var x = 200

function customPrompt() {
    return new Promise((resolve, reject) => {
        document.getElementById("popup").style.display = "flex"

        document.getElementById("check").onclick = function () {
            resolve(document.getElementById("username").value)
            // console.log("msg");
        }
    })
}

async function get() {
    // var msg = document.getElementById("username").value
    let name = await customPrompt()
    // console.log(name);
    confirm(name)
    close_popup()
}
get()

function close_popup() {
    document.getElementById("popup").style.display = "none"
}


// function draw() {

//     var paint = `
//         <div style="padding: 10px; margin: 10px;">

//         <div
//             style="background-color: antiquewhite; position: absolute;left: ${x}px;top: 10px; width: 150px;height: 70px;border-style: dashed; border-radius: 100%;">
//         </div>
//         <div
//             style="background-color: antiquewhite;position: absolute;left: 200px;top: 150px; width: 90px;height: 90px; ;border-style: dashed ;border-radius: 50%;">
//         </div>
//         <div
//             style="background-color: antiquewhite;position: absolute;left: 250px;top: 300px;  width: 90px;height: 90px;border-style: dashed">
//         </div>
//         <div
//             style="background-color: antiquewhite;position: absolute;left: 200px;top: 450px;  width: 100px;height: 50px;border-style: dashed">
//         </div>
//     </div>
//     `
//     document.body.insertAdjacentHTML(`beforeend`, paint)
//     x += 100
// }
// confirm(n1 + n2)