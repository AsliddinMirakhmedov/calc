// document.write("hello world")































function calculate() {
    var firstNum = document.getElementById("fNum")
    var secondNum = document.getElementById("sNum");
}

function calculatePlus () {
    var num1,num2, result;

    num1 = parseInt(num1)
    num1 = +document.getElementById("fNum").value;

    num2 = +document.getElementById("sNum").value;
    num2 = parseInt(num2);

    result = num1 + num2;

    document.getElementById("result").innerHTML = result 
}

function calculateMinus () {
    var num1,num2, result;

    num1 = parseInt(num1)
    num1 = +document.getElementById("fNum").value;

    num2 = +document.getElementById("sNum").value;
    num2 = parseInt(num2);

    result = num1 - num2;

    document.getElementById("result").innerHTML = result
}

function calculateMultiply () {
    var num1,num2, result;

    num1 = parseInt(num1)
    num1 = +document.getElementById("fNum").value;

    num2 = +document.getElementById("sNum").value;
    num2 = parseInt(num2);

    result = num1 * num2;

    document.getElementById("result").innerHTML = result
}

function calculateDiv () {
    var num1,num2, result;

    num1 = parseInt(num1)
    num1 = +document.getElementById("fNum").value;

    num2 = +document.getElementById("sNum").value;
    num2 = parseInt(num2);

    result = num1 / num2;

    document.getElementById("result").innerHTML = result
}

function calculateremainder () {
    var num1,num2, result;

    num1 = parseInt(num1)
    num1 = +document.getElementById("fNum").value;

    num2 = +document.getElementById("sNum").value;
    num2 = parseInt(num2);

    result = num1 % num2;

    document.getElementById("result").innerHTML = result
}


