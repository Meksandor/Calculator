function operate() {
    switch (operatorSym) {
        case "+":
            const resultSum = parseInt(numBefOp.replace('Rp', '').trim()) + parseInt(numAftOp.replace('Rp', '').trim())
            console.log(resultSum)
            calculatorScreen.textContent = resultSum
            operationArray = []
            operationArray.push(resultSum.toString())
            clickedButtons = []
            clickedButtons.push(resultSum)
            break;
        case "-":
            const resultSubtrack = numBefOp - numAftOp
            console.log(resultSubtrack)
            calculatorScreen.textContent = resultSubtrack
            operationArray = []
            operationArray.push(resultSubtrack.toString())
            clickedButtons = []
            clickedButtons.push(resultSubtrack)
            break;
        case "*":
            const resultMultiply = numBefOp * numAftOp
            console.log(resultMultiply)
            calculatorScreen.textContent = resultMultiply
            operationArray = []
            operationArray.push(resultMultiply.toString())
            clickedButtons = []
            clickedButtons.push(resultMultiply)
            break
        case "/":
            const resultDivide = numBefOp / numAftOp
            console.log(resultDivide)
            calculatorScreen.textContent = resultDivide
            operationArray = []
            operationArray.push(resultDivide.toString())
            clickedButtons = []
            clickedButtons.push(resultDivide)
            break

        default:
            return
    }
}

var operationArray = []
var numBefOp = 0
var numAftOp = 0
var operatorSym = 0

const calculatorScreen = document.querySelector('#calculatorScreen')

var clickedButtons = [];

function handleButtonClick(button) { // Function to handle button clicks
    clickedButtons.push(button);
    updateOutput();
}
function updateOutput() {// Function to update the content of the <div>
    const calculatorScreen = document.querySelector('#calculatorScreen')
    calculatorScreen.textContent = clickedButtons.join('');
}


const clearButton = document.querySelector('#clearButton')
clearButton.addEventListener("click", function () {
    operationArray = []
    clickedButtons = []
    calculatorScreen.textContent = ""
})


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
    handleButtonClick("0")
})
numBut1.addEventListener("click", function () {
    operationArray.push("1")
    handleButtonClick("1")
})
numBut2.addEventListener("click", function () {
    operationArray.push("2")
    handleButtonClick("2")
})
numBut3.addEventListener("click", function () {
    operationArray.push("3")
    handleButtonClick("3")
})
numBut4.addEventListener("click", function () {
    operationArray.push("4")
    handleButtonClick("4")
})
numBut5.addEventListener("click", function () {
    operationArray.push("5")
    handleButtonClick("5")
})
numBut6.addEventListener("click", function () {
    operationArray.push("6")
    handleButtonClick("6")
})
numBut7.addEventListener("click", function () {
    operationArray.push("7")
    handleButtonClick("7")
})
numBut8.addEventListener("click", function () {
    operationArray.push("8")
    handleButtonClick("8")
})
numBut9.addEventListener("click", function () {
    operationArray.push("9")
    handleButtonClick("9")
})

const opButAdd = document.querySelector('#add')
const opButSubtrack = document.querySelector('#subtrack')
const opButMultiply = document.querySelector('#multiply')
const opButDivide = document.querySelector('#divide')
const opButEquals = document.querySelector('#equals')

opButAdd.addEventListener("click", function () {
    operationArray.push("+")
    handleButtonClick("+")
})
opButSubtrack.addEventListener("click", function () {
    operationArray.push("-")
    handleButtonClick("-")
})
opButMultiply.addEventListener("click", function () {
    operationArray.push("*")
    handleButtonClick("*")
})
opButDivide.addEventListener("click", function () {
    operationArray.push("/")
    handleButtonClick("/")
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