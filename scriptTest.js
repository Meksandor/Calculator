if (operationArray.includes("+") == true || operationArray.includes("-") == true || operationArray.includes("*") == true || operationArray.includes("/") == true) {
    if (operatorSym = "+") {
        const sumOprtIndex = operationArray.indexOf("+")
        const indexOfDecimal = operationArray.indexOf(".");  // Check if "decimal" exists between start till the decimal indices and sum till the end indices.

        const isDecimalBetweenStartToSum = indexOfDecimal >= 0 || indexOfDecimal < sumOprtIndex;
        const isDecimalBetweenSumToStart = indexOfDecimal > sumOprtIndex
        if (isDecimalBetweenStartToSum == true || isDecimalBetweenSumToStart == true) {
            console.log("We already have decimal");
            return
        }
        else {
            console.log("We don't have dacimal so let's add");
            operationArray.push(".")
            clickedButtons.push(".")
        }
    }
    else if (operatorSym = "-") {
        const subtrackOprtIndex = operationArray.indexOf("-")
        const indexOfDecimal = operationArray.indexOf(".");

        const isDecimalBetweenStartToSubtrack = indexOfDecimal >= 0 && indexOfDecimal < subtrackOprtIndex;
        const isDecimalBetweenSubtrackToStart = indexOfDecimal > subtrackOprtIndex
        if (isDecimalBetweenStartToSubtrack == true || isDecimalBetweenSubtrackToStart == true) {
            console.log("We already have decimal");
            return
        }
        else {
            console.log("We don't have dacimal so let's add");
            operationArray.push(".")
            clickedButtons.push(".")
        }
    }
    else if (operatorSym = "*") {
        const multiplyOprtIndex = operationArray.indexOf("*")
        const indexOfDecimal = operationArray.indexOf(".");

        const isDecimalBetweenStartToMultiply = indexOfDecimal >= 0 && indexOfDecimal < multiplyOprtIndex;
        const isDecimalBetweenMultiplyToStart = indexOfDecimal > multiplyOprtIndex
        if (isDecimalBetweenStartToMultiply == true || isDecimalBetweenMultiplyToStart == true) {
            console.log("We already have decimal");
            return
        }
        else {
            console.log("We don't have dacimal so let's add");
            operationArray.push(".")
            clickedButtons.push(".")
        }
    }
    else if (operatorSym = "/") {
        const divideOprtIndex = operationArray.indexOf("/")
        const indexOfDecimal = operationArray.indexOf(".");

        const isDecimalBetweenStartToDivide = indexOfDecimal >= 0 && indexOfDecimal < divideOprtIndex;
        const isDecimalBetweenDivideToStart = indexOfDecimal > divideOprtIndex
        if (isDecimalBetweenStartToDivide == true || isDecimalBetweenDivideToStart == true) {
            console.log("We already have decimal");
            return
        }
        else {
            console.log("We don't have dacimal so let's add");
            operationArray.push(".")
            clickedButtons.push(".")
        }
    }
}

else if (operationArray.includes("+") == false || operationArray.includes("-") == false || operationArray.includes("*") == false || operationArray.includes("/") == false) {
    if (operationArray.includes(".") == true) {
        return
    }
    else if (operationArray.includes(".") == false) {
        operationArray.push(".")
        clickedButtons.push(".")
    }
}
const sumOprtIndex = operationArray.indexOf("+")
const subtrackOprtIndex = operationArray.indexOf("-")
const multiplyOprtIndex = operationArray.indexOf("*")
const divideOprtIndex = operationArray.indexOf("/")