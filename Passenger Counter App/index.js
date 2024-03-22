let countEl = document.getElementById("count-el")
let previousCount = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let currentCount = count + " - "
    previousCount.textContent += currentCount
    count = 0
    countEl.textContent = count
}