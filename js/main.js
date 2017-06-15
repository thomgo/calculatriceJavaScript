// // Get the input to display the result
// var result = document.getElementById("result");
//
// // On click on number or operator adds it to the result input
// function getValue(object) {
//   result.value += object.innerHTML;
// }
//
// // Clear the result input
// function clearAll() {
//   result.value = "";
// }
//
// // On click on = eval the content of the result input content and display the result
// function operate() {
//   var operation = result.value;
//   var finalResult = eval(operation);
//   result.value = finalResult;
// }


// Get the input to display the result
var result = document.getElementById("result");
var currentOperation = "";

// On click on number or operator adds it to the result input
function getValue(object) {
  currentOperation += object.innerHTML;
  result.value = object.innerHTML;
}

function getOperator(object) {
  currentOperation += object.innerHTML;
}
// Clear the result input
function clearAll() {
  result.value = "";
}

// On click on = eval the content of the result input content and display the result
function operate() {
  result.value = eval(currentOperation);
  currentOperation = eval(currentOperation);
}
