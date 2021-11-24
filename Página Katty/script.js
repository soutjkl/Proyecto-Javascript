console.log("script loader")
var form1 = document.getElementById("form");

form1.addEventListener("submit", function(event) {
	event.preventDefault();
	console.log("submit");
});