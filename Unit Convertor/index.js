/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById("convert-btn")
let inputEL =  document.getElementById("input-el")
let lengthEl= document.getElementById("length-el")
let volumeEl= document.getElementById("volume-el")
let massEl= document.getElementById("mass-el")

convertBtn.addEventListener("click", function(){
    let value = inputEL.value
    lengthEl.innerText = `${value} meters = ${(value*3.281).toFixed(3)} feet | ${value} feet = ${(value/3.281).toFixed(3)} meters`
    volumeEl.innerText = `${value} liters = ${(value*0.264).toFixed(3)} gallons | ${value} gallons = ${(value/0.264).toFixed(3)} liters`
    massEl.innerText = `${value} kilos = ${(value*2.204).toFixed(3)} pounds | ${value} pounds = ${(value/2.204).toFixed(3)} kilos`
})