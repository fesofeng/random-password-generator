let characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
"/"]

let firstField = document.getElementById("first-field")
let secondField = document.getElementById("second-field")
let firstClipboard = document.getElementById("first-clipboard")
let secondClipboard = document.getElementById("second-clipboard")
let renderPasswordButton = document.getElementById("render-password-btn")

firstField.textContent += " "
secondField.textContent += " "

renderPasswordButton.addEventListener("click", function renderPassword() {

    firstField.textContent = genRandomPassword()
    secondField.textContent = genRandomPassword()

})

firstClipboard.addEventListener("click", function copyToClipboard() {

    navigator.clipboard.writeText(firstField.textContent)

})

secondClipboard.addEventListener("click", function copyToClipboard() {
    navigator.clipboard.writeText(secondField.textContent)
})

function genRandomPassword() {

    let password = " "

    for (let i = 0; i < 15; i++) {
        password += characters[Math.floor(Math.random() * characters.length)]
    }

    return password

}







