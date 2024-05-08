/*
Challenge:
Make it so that when you click the 'Add to cart' button, whatever is written in the input field should be console logged.
*/

let inputField = document.getElementById("input-field")
let addButton = document.getElementById("add-button")

addButton.addEventListener("click", function(){
    console.log(inputField.value)
})