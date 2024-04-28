const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// TODO
// When click on the button
// select 30 random characters from the above array
// 15 char long 2 passwords

let password1 = document.getElementById("password-1")
let password2 = document.getElementById("password-2")

function generateRandomChars(){
    let passwordString = "hhhhhhhhhhh"

    return passwordString
}

function displayPasswords(){
    password1.textContent = generateRandomChars()
    password2.textContent = generateRandomChars()
    document.getElementById("pw-1").style.padding = "0";
    document.getElementById("pw-2").style.padding = "0";
}