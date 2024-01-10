function emailCheck(){
	if (document.getElementById("input").value === "" || document.getElementById("input").value.indexOf("@") === -1){
		document.getElementById("outputmessage").innerHTML = "Please insert a valid email";
	}
	else{
		document.getElementById("outputmessage").innerHTML = "";
	}
}