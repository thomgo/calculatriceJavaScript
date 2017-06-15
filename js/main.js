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

// Store the current operation as it is
var currentOperation = "0";

// Tell if an operator as been triggered in order to know if the input value needs to be deleted
var triggerOperation = false;

// On click on number add it to the current operation
function getValue(object) {
  if (triggerOperation === true) {
    result.value = "";
  }
  currentOperation += object.innerHTML;
  result.value += object.innerHTML;
  triggerOperation = false;
}

// On click on operator eval the intermediate result for multi terms operations
function getOperator(object) {
  var intermediateResult = eval(currentOperation);
  result.value = intermediateResult;
  currentOperation = intermediateResult.toString();
  currentOperation += object.innerHTML;
  triggerOperation = true;
}


// Clear the result input
function clearAll() {
  result.value = "";
  currentOperation = "";
  intermediateResult = "";
}

// Delete a number from the input and the current operation
function del() {
  result.value = result.value.substr(0, (result.value.length - 1));
  currentOperation = currentOperation.substr(0, (currentOperation.length - 1));
}

// On click on = eval the content of the result input content and display the result
function operate() {
  var finalResult = eval(currentOperation);
  result.value = finalResult;
  currentOperation = finalResult.toString();
}
