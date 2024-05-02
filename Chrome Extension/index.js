let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const tabBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn")

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    
})

// truthy
// falsy

// false
// 0
// ""
// null
// undefined
// NaN

// ulEl.innerHTML += "<li><a href=\"" + inputEl.value + "\" target=\"_blank\">" + inputEl.value + "</a></li>"

// localStorage.setItem("Lead", "www.lead.com")
// console.log(localStorage.getItem("Lead"))
// localStorage.clear()

// function renderLeads(){
//     let listItems = ""
//     for(let i = 0; i < myLeads.length; i++){
//         // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
//         // let li = document.createElement("li")
//         // li.textContent = myLeads[i]
//         // ulEl.append(li)
//         listItems += "<li>" + myLeads[i] + "</li>"
//     }
    
//     ulEl.innerHTML = listItems
// }
