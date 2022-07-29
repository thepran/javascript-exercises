const fibonacci = function (length) {
    let firstNumber = 1, secondNumber = 1, nextTerm, series = []
    let lengthOfSeries = Number(length)
    if (lengthOfSeries < 0)
        return "OOPS"
    else {
        for (let i = 0; i < lengthOfSeries; i += 1) {
            if (i <= 1)
                nextTerm = 1
            else {
                nextTerm = firstNumber + secondNumber
                firstNumber = secondNumber
                secondNumber = nextTerm
            }
            series.push(nextTerm)

        }
        return series[series.length - 1]
    }
};

// Do not edit below this line
module.exports = fibonacci;

