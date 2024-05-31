import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

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
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
        clearShoppingListEl()

        for(let i = 0; i < itemsArray.length; i++){
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]

            appendItemToShoppingListEl(currentItem)
        }
    } else{
        shoppingListEl.innerHTML = "No items here... yet"
    }
    
})

function clearInput(){
    inputFieldEl.value= ""
}

function clearShoppingListEl(){
    shoppingListEl.innerHTML= ""
}

function appendItemToShoppingListEl(item){
    if(item != ""){
        let itemKey = item[0]
        let itemValue = item[1]

        let newEl = document.createElement("li")
        newEl.textContent = itemValue

        newEl.addEventListener("dblclick", function(){
            let exactLocationOfStoryInDB = ref(database, `shoppingList/${itemKey}`)
        
        remove(exactLocationOfStoryInDB)
        })

        shoppingListEl.append(newEl)
    }
}