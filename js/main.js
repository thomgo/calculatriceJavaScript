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
var triggerOperation = false;

// On click on number or operator adds it to the result input
function getValue(object) {
  if (triggerOperation === true) {
    result.value = "";
  }
  currentOperation += object.innerHTML;
  result.value += object.innerHTML;
  triggerOperation = false;
}

function getOperator(object) {
  if (result.value !== ""){
    currentOperation = result.value;
  }
  currentOperation += object.innerHTML;
  triggerOperation = true;
}
// Clear the result input
function clearAll() {
  result.value = "";
  currentOperation = "";
}

// On click on = eval the content of the result input content and display the result
function operate() {
  var finalResult = eval(currentOperation);
  if(isNaN(finalResult)) {
    result.value  = "Error";
  }
  else {
    result.value = finalResult;
    currentOperation = finalResult;
  }
}
