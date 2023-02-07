window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
	document.getElementById("theGreen").addEventListener("click", btnFunc);

};

//the listener function here
function btnFunc(){
	alert("woohoo");
}