//your JS code here. If required.
let text = document.getElementById("status");
enterBtn.addEventListener("click",function(){
	let heading = document.createElement("h1");
	heading.innerText = "Entered Metaverse";
	text.innerText="";
	text.appendChild(heading);
})