import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-8eb31-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const endorsementsListInDb = ref(database, "endorsementsList")

let mainInputEl = document.getElementById("main")
let fromInputEl = document.getElementById("from")
let toInputEl = document.getElementById("to")
let loveEl = document.getElementById("love")
let publishButton = document.getElementById("publish")
let endorsementsUlEl = document.getElementById("endorsements")

publishButton.addEventListener("click", function(){
    let inputContent = mainInputEl.value
    let inputFrom = fromInputEl.value
    let inputTo = toInputEl.value
    let inputArray = [inputTo, inputContent, inputFrom]

    if(inputContent != "" && inputFrom != "" && inputTo != ""){
        let inputObject = makeAnObject(inputArray)
        push(endorsementsListInDb, inputObject)
        clearInput()
    } 
})

onValue(endorsementsListInDb, function(snapshot){
    if (snapshot.exists()){
        let itemsArray = Object.entries(snapshot.val())
        clearEndorsementsListEl()
        for(let i = 0; i < itemsArray.length; i++){
            let currentItem = itemsArray[i]
            appendItemToEndorsementsListEl(currentItem)
        } 
    } else{
        endorsementsUlEl.innerHTML = "No items here... yet"
    }
})

function makeAnObject(inputArray){
    return Object.assign({}, inputArray)
}

function clearInput(){
    mainInputEl.value = ""
    fromInputEl.value = ""
    toInputEl.value = ""
}

function clearEndorsementsListEl(){
    endorsementsUlEl.innerHTML= ""
}

function makeLiElement(itemObject){
    let inputArray = Object.values(itemObject)
    let liItem = `<h3>To ${inputArray[0]}</h3>
                    <p>${inputArray[1]}</p>
                    <div id="cont">
                        <h3 id="reciever">From ${inputArray[2]}</h3>
                    </div>`
                    // <p id="love"><span id="heart">🖤</span>${inputArray[3]}</p>
    return liItem
}

function appendItemToEndorsementsListEl(item){
    if(item != ""){
        let itemKey = item[0]
        let itemValue = item[1]

        let newEl = document.createElement("li")
        newEl.innerHTML = makeLiElement(itemValue)

        // newEl.addEventListener("dblclick", function(){
        //     let exactLocationOfStoryInDB = ref(database, `endorsementsList/${itemKey}`)
        
        // remove(exactLocationOfStoryInDB)
        // })

        endorsementsUlEl.prepend(newEl)
    }
}