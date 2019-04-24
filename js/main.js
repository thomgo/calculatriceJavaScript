//
//~~~~~~~ Easy version ~~~~~~~
//

// // Get the input to display the result
// var result = document.getElementById("result");
//
// // On click on number or operator adds it to the result input
// function getValue(object) {
//   result.innerHTML += object.innerHTML;
// }
//
// // Clear the result input
// function clearAll() {
//   result.innerHTML = "";
// }
//
// // On click on = eval the content of the result input content and display the result
// function operate() {
//   var operation = result.innerHTML;
//   var finalResult = eval(operation);
//   result.innerHTML = finalResult;
// }

//
//~~~~~~~ Hard version ~~~~~~~
//

// Get the input to display the result
var result = document.getElementById("result");

// Store the current operation as it is
var currentOperation = "";

// Tell if an operator as been triggered in order to know if the input value needs to be deleted
var triggerOperation = false;

// On click on number add it to the current operation
function getValue(object) {
  if (triggerOperation === true) {
    result.innerHTML = "";
  }
  currentOperation += object.innerHTML;
  result.innerHTML += object.innerHTML;
  triggerOperation = false;
}

// On click on operator eval the intermediate result for multi terms operations
function getOperator(object) {
  var intermediateResult = eval(currentOperation);
  result.innerHTML = intermediateResult;
  currentOperation = intermediateResult.toString();
  currentOperation += object.innerHTML;
  triggerOperation = true;
}


// Clear the result input
function clearAll() {
  result.innerHTML = "";
  currentOperation = "";
  intermediateResult = "";
}

// Delete a number from the input and the current operation
function del() {
  result.innerHTML = result.innerHTML.substr(0, (result.innerHTML.length - 1));
  if (triggerOperation === false) {
    currentOperation = currentOperation.substr(0, (currentOperation.length - 1));
  }
  else {
    currentOperation = currentOperation.substr(0, (currentOperation.length - 2));
  }
}

// On click on = eval the content of the result input content and display the result
function operate() {
  var finalResult = eval(currentOperation);
  result.innerHTML = finalResult;
  currentOperation = finalResult.toString();
}
