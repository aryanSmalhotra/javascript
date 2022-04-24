
let people = document.getElementById("num")
let saveEl = document.getElementById("save-el")

let count = 0

function increment() {
    count = count + 1
    people.innerText=count
}
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count.textContent=0
    count = 0
}
