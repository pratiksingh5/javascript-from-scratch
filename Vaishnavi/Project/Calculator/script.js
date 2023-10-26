let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let result = document.querySelector("#result");

function sum() {
  if (num1.value && num2.value) {
    let sum = Number(num1.value) + Number(num2.value);
    result.innerHTML = sum;
  } else {
    alert("Please fill the input feilds");
  }
}

function reset() {
  num1.value = 0;
  num2.value = 0;
  result.innerHTML = 0;
}