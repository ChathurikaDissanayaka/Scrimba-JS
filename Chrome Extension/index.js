let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads(){
    let listItems = ""
    for(let i = 0; i < myLeads.length; i++){
        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
        // let li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
        listItems += "<li>" + myLeads[i] + "</li>"
    }
    
    ulEl.innerHTML = listItems
}
