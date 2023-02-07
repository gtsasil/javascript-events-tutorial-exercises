window.onload = function loadFn() {
	var containerElm = document.getElementById("container");

	containerElm.addEventListener("click", function(event) {
		//you code here
		let test = event.target.id;
		alert(test);
		
	});
};
