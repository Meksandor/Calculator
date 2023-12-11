function operate() {
    if (operatorSym == "+") {
        const resultSum = parseInt(numBefOp.replace('Rp', '').trim()) + parseInt(numAftOp.replace('Rp', '').trim())
        console.log(resultSum)
        calculatorScreen.textContent = resultSum
        operationArray = []
        operationArray.push(resultSum.toString())

        clickedButtons = []
        clickedButtons.push(resultSum.toString())
        return
    }
    else if (operatorSym == "-") {
        const resultSubtrack = numBefOp - numAftOp
        console.log(resultSubtrack)
        calculatorScreen.textContent = resultSubtrack
        operationArray = []
        operationArray.push(resultSubtrack.toString())

        clickedButtons = []
        clickedButtons.push(resultSubtrack.toString())
        return
    }
    else if (operatorSym == "*") {
        const resultMultiply = numBefOp * numAftOp
        console.log(resultMultiply)
        calculatorScreen.textContent = resultMultiply
        operationArray = []
        operationArray.push(resultMultiply.toString())

        clickedButtons = []
        clickedButtons.push(resultMultiply.toString())
        return
    }
    else if (operatorSym == "/") {
        const resultDivide = numBefOp / numAftOp
        console.log(resultDivide)
        calculatorScreen.textContent = resultDivide
        operationArray = []
        operationArray.push(resultDivide.toString())

        clickedButtons = []
        clickedButtons.push(resultDivide.toString())
        return
    }
}
