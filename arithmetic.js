function addNumbers(firstNum, secondNum) {
    return firstNum + secondNum;
}

function oddEvenChecker(number) {
    if(number % 2 === 0) {
        return number + " is an even number";
    } else {
        return number + " is an odd number";
    }
}

module.exports = {
    addNumbers,
    oddEvenChecker
}