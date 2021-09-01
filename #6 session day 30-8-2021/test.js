// lab 1 

var how_many_numbers = Number(prompt("how many number ?"))
var numbers = []
var total = 0
for (var i = 0; i < how_many_numbers; i++) {
    numbers.push(Number(prompt("enter number" + (i + 1))))
}
for (var k; k < numbers.length; k++) {
    total = numbers[k]
}
confirm(numbers)