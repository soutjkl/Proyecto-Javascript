console.log("script loaded")
var form1 = document.getElementById("form");
var content = document.getElementById("form-content");

form1.addEventListener("submit", function(event) {
	event.preventDefault();
	const data = Object.fromEntries(new FormData(event.target).entries());
	console.log(event);
	console.log("submit");
	console.log(data);
	content.innerHTML = "<h1>Nombre: </h1>";
	content.innerHTML += "<p>" + data.name + "</p>";
	content.innerHTML += "<h1>Number: </h1>";
	content.innerHTML += "<p>" + data.number + "</p>";

  	content.innerHTML += data.password;
});

 let one = document.querySelector(".one")
        
        one.addEventListener("click", () => {
          one.classList.toggle("changer")
  })

 let tittle = document.querySelector(".tittle")
        
        tittle.addEventListener("click", () => {
          tittle.classList.toggle("changer")
  })

 let text = document.querySelector(".prism")
        text.addEventListener("click", () => {
        text.classList.toggle("changer")
  })

  let teenage = document.querySelector(".teenage")
        teenage.addEventListener("click", () => {
        teenage.classList.toggle("changer")
  })

    let witness = document.querySelector(".witness")
        witness.addEventListener("click", () => {
        witness.classList.toggle("changer")
  })

     let smile = document.querySelector(".smile")
        smile.addEventListener("click", () => {
        smile.classList.toggle("changer")
  })


function example(){
	return []
} 