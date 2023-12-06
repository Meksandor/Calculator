function operate() {
    switch (operatorSym) {
        case "+":
            console.log(parseInt(numBefOp.replace('Rp', '').trim()) + parseInt(numAftOp.replace('Rp', '').trim()))
            break;
        case "-":
            console.log(numBefOp - numAftOp)
            break;
        case "*":
            console.log(numBefOp * numAftOp)
            break
        case "/":
            console.log(numBefOp / numAftOp)
            break

        default:
            return
    }
}

var operationArray = []
var numBefOp = 0
var numAftOp = 0
var operatorSym = 0

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

opButEquals.addEventListener("click", function () {
    //This one will stop the whole array pushing to give us the solution

    function splitArray(operationArray) {
        // Find the index of the operator
        const operatorIndex = operationArray.findIndex(element => ['+', '-', '*', '/'].includes(element));

        if (operatorIndex !== -1) {
            // Split the array into three parts
            const numbersBefore = operationArray.slice(0, operatorIndex);
            const operator = operationArray[operatorIndex];
            const numbersAfter = operationArray.slice(operatorIndex + 1);

            /*
            const numBeforeJoined = numbersBefore.join("")
            const numAfterJoined = numbersAfter.join("")

            numBefOp = numBeforeJoined
            numAftOp = numAfterJoined
            operatorSym = operator
*/

            return [numbersBefore, operator, numbersAfter];
        }
        else {
            // Handle the case where no operator is found
            console.error("No operator found in the array.");
            return null;
        }
    }
    const inputArray = operationArray
    const result = splitArray(inputArray);

    if (result) {
        numBefOp = result[0].join("");
        operatorSym = result[1];
        numAftOp = result[2].join("");
    }
    operate();
})