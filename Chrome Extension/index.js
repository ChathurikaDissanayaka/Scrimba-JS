let myLeads = []
const inputEl = document.getElementById("input-el")

// Push the value "www.awesomelead.com" to myArray when the input button is clicked

const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function(){
    myLeads.push("www.awesomelead.com")
    console.log(myLeads)
})
