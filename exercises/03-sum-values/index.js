// adding the function to the window makes it globally available
window.calculateSumListener = function() {
	//Return the value of the input #firstNumber
	var stringA = document.getElementById("firstNumber").value;
	
	//Return the value of the input #secondNumber
	var stringB = document.getElementById("secondNumber").value;

	//your code goes here
	var sumStrings = parseInt(stringA) + parseInt(stringB);
	var result = document.getElementById("resultNumber");
	result.value = sumStrings;
	
};
