import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

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
    if(inputValue != ""){
        push(shoppingListInDB, inputValue)
        clearInput()
    } 
})

onValue(shoppingListInDB, function(snapshot){
    let itemsArray = Object.values(snapshot.val())
    clearShoppingListEl()

    for(let i = 0; i < itemsArray.length; i++){
        appendItemToShoppingListEl(itemsArray[i])
        console.log(itemsArray[i])
    }
})

function clearInput(){
    inputFieldEl.value= ""
}

function clearShoppingListEl(){
    shoppingListEl.innerHTML= ""
}

function appendItemToShoppingListEl(inputValue){
    if(inputValue != ""){
        shoppingListEl.innerHTML += `<li>${inputValue}</li>`
    }
}