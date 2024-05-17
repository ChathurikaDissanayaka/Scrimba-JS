import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-8eb31-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

let inputFieldEl = document.getElementById("input-field")
let addButton = document.getElementById("add-button")
let shoppingListEl = document.getElementById("shopping-list")

addButton.addEventListener("click", function(){
    let inputValue = inputFieldEl.value
    shoppingListEl.innerHTML += `<li>${inputValue}</li>`
    push(shoppingListInDB, inputValue)
    console.log(inputValue)
    inputFieldEl.value= ""
})