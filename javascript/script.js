alert("helloworld");

function changeColorDetectingScroll(){
	console.log(window.scrollY);
	if(80 < window.scrollY){
		document.getElementById("main-session").style.backgroundColor = "white";
		document.getElementById("big-font").style.color = "rgb(0, 123, 255)";
	}
	else{
		document.getElementById("main-session").style.backgroundColor = "rgb(0, 123, 255)";
		document.getElementById("big-font").style.color = "white";
	}
}

setInterval(changeColorDetectingScroll,10);