var result = document.getElementById("result");

function getValue(object) {
  result.value += object.innerHTML;
}

function clearAll() {
  result.value = "";
}

function operate() {
  var operation = result.value;
  var finalResult = eval(operation);
  result.value = finalResult;
}
