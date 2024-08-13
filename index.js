let currTotalEl = document.getElementById("curr-total")
let prevTotalEl = document.getElementById("prev-total")
let countEl = document.getElementById("count-el")
let count = 0
let currTotal = 0

function incrementCount() {
    count += 1
    countEl.textContent = count
}

function saveCount() {
    currTotal += count
    currTotalEl.textContent = "Current total: " + currTotal
    resetCount()
}

function resetCount() {
    count = 0
    countEl.textContent = count
}

function reset() {
    prevTotalEl.textContent = "Previous total: " + currTotal
    currTotal = 0
    currTotalEl.textContent = "Current total: " + currTotal
    resetCount()
}