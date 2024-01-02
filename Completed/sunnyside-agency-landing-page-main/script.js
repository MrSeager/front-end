function navBar(){
	if(document.getElementById("mySidepanel").style.width != "80%"){
		document.getElementById("mySidepanel").style.width = "80%"
		document.getElementById("mySidepanel").style.overflowX = "visible";
	} else {
		document.getElementById("mySidepanel").style.width = "0";
		document.getElementById("mySidepanel").style.overflowX = "hidden";
	}
}
