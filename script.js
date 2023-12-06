const numberButtons = document.querySelectorAll('.numberButtons')
const operatorButtons = document.querySelectorAll('.operatorButtons')

const calculatorScreen = document.querySelector('#calculatorScreen')

const numBut0 = document.querySelector('#zero')
const numBut1 = document.querySelector('#one')
const numBut2 = document.querySelector('#two')
const numBut3 = document.querySelector('#three')
const numBut4 = document.querySelector('#four')
const numBut5 = document.querySelector('#five')
const numBut6 = document.querySelector('#six')
const numBut7 = document.querySelector('#seven')
const numBut8 = document.querySelector('#eight')
const numBut9 = document.querySelector('#nine')

numBut0.addEventListener("click", function () {
    operationArray.push("0")
})
numBut1.addEventListener("click", function () {
    operationArray.push("1")
})
numBut2.addEventListener("click", function () {
    operationArray.push("2")
})
numBut3.addEventListener("click", function () {
    operationArray.push("3")
})
numBut4.addEventListener("click", function () {
    operationArray.push("4")
})
numBut5.addEventListener("click", function () {
    operationArray.push("5")
})
numBut6.addEventListener("click", function () {
    operationArray.push("6")
})
numBut7.addEventListener("click", function () {
    operationArray.push("7")
})
numBut8.addEventListener("click", function () {
    operationArray.push("8")
})
numBut9.addEventListener("click", function () {
    operationArray.push("9")
})

const opButAdd = document.querySelector('#add')
const opButSubtrack = document.querySelector('#subtrack')
const opButMultiply = document.querySelector('#multiply')
const opButDivide = document.querySelector('#divide')
const opButEquals = document.querySelector('#equals')

opButAdd.addEventListener("click", function () {
    operationArray.push("+")
})
opButSubtrack.addEventListener("click", function () {
    operationArray.push("-")
})
opButMultiply.addEventListener("click", function () {
    operationArray.push("*")
})
opButDivide.addEventListener("click", function () {
    operationArray.push("/")
})