let firstNumber = 0;

let operand = "";

let secondNumber = 0;

let result = document.getElementById('result');

function add(num1, num2) {

    return num1 + num2;

}

function subtract(num1, num2) {

    return num1 - num2;

}

function product(num1, num2) {

    return num1 * num2;

}

function divide(num1, num2) {

    return num1 / num2;
}

function operate(operator, num1, num2) {

    if (operator == "+") {
        return add(num1, num2);
    } else if (operator == "-") {
        return subtract(num1, num2);
    } else if (operator == "*") {
        return product(num1, num2);
    } else if (operator == "/") {
        return divide(num1, num2);
    }

}

function setClickedValue(button) {

    result.innerHTML = button.innerHTML;

}

