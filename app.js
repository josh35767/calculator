var firstValue = [""];
var secondValue = [""];

function convert(value, array) {
  array.push(value);
  var someValue = array.join("");
  return parseFloat(someValue);
}

function add (a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function operator(type, display) {
  firstValue = Number(currentNumber);
  currentValue = secondValue;
  opperatorType = type;
  $("#display").html(display);
}

var currentValue = firstValue;
var opperatorType;
var currentNumber;
var result;
var isNegative = false;


$(document).ready(function(){
  $("#digitZero").click(function(){
    currentNumber = convert(0, currentValue);
    $("#display").html(currentNumber);
  });
  $("#digitOne").click(function(){
    currentNumber = convert(1, currentValue);
    $("#display").html(currentNumber);
  });
  $("#digitTwo").click(function(){
    currentNumber = convert(2, currentValue);
    $("#display").html(currentNumber);
  });
  $("#digitThree").click(function(){
    currentNumber = convert(3, currentValue);
    $("#display").html(currentNumber);
  });
  $("#digitFour").click(function(){
    currentNumber = convert(4, currentValue);
    $("#display").html(currentNumber);
  });
  $("#digitFive").click(function(){
    currentNumber = convert(5, currentValue);
    $("#display").html(currentNumber);
  });
  $("#digitSix").click(function(){
    currentNumber = convert(6, currentValue);
    $("#display").html(currentNumber);
  });
  $("#digitSeven").click(function(){
    currentNumber = convert(7, currentValue);
    $("#display").html(currentNumber);
  });
  $("#digitEight").click(function(){
    currentNumber = convert(8, currentValue);
    $("#display").html(currentNumber);
  });
  $("#digitNine").click(function(){
    currentNumber = convert(9 , currentValue);
    $("#display").html(currentNumber);
  });
  $("#decimal").click(function(){
    currentNumber = convert(".", currentValue);
  });


  $("#add").click(function(){
    operator("add", "+");
  });
  $("#subtract").click(function(){
    operator("subtract", "-");
  });
  $("#multiply").click(function(){
    operator("multiply", "*");
  });
  $("#divide").click(function(){
    operator("divide", "/");
  });

  $("#negative").click(function(){
    if (isNegative) {
      currentValue[0] = "";
      isNegative = false;
    }
    else {
      currentValue[0] = "-";
      isNegative = true;
    }
    currentNumber = currentValue.join("");
    $("#display").html(currentNumber);
  });

  $("#equal").click(function(){
    secondValue = currentNumber;
    switch (opperatorType) {
      case "add":
        result = add(firstValue, secondValue);
      break;
      case "subtract":
        result = subtract(firstValue, secondValue);
      break;
      case "multiply":
        result = multiply(firstValue, secondValue);
      break;
      case "divide":
        result = divide(firstValue, secondValue);
      break;
    }
    $("#display").html(result);
    firstValue = result;
    secondValue = [""];
    currentNumber = firstValue;
    if (currentNumber.toString().split("")[0]==='-'){
      currentValue = currentNumber.toString().split("");
    }
    else {
      currentValue = currentNumber.toString().split("");
      currentValue.unshift("");
    }

  });

  $("#clear").click(function(){
    firstValue = [""];
    secondValue = [""];
    currentNumber = 0;
    currentValue = firstValue;
    $("#display").html("");
  });


});
