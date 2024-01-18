let dropDown = (id) => {
	if(document.getElementById("myDropdown" + id).style.display != "block"){
		
		for (let i = 1; i <=3; i++){
			document.getElementById("myDropdown" + i).style.display = "none";
			document.getElementById("arrow" + i).style.transform = "rotate(0)";
		}
		
		document.getElementById("myDropdown" + id).style.display = "block";
		document.getElementById("arrow" + id).style.transform = "rotate(180deg)";
	} else {
		document.getElementById("myDropdown" + id).style.display = "none";
		document.getElementById("arrow" + id).style.transform = "rotate(0)";
	}
}

let dropDownMobile = (id) => {
	if(document.getElementById("myDropdownMobile" + id).style.display != "flex"){
		
		for (let i = 1; i <=3; i++){
			document.getElementById("myDropdownMobile" + i).style.display = "none";
			document.getElementById("arrowMobile" + i).style.transform = "rotate(0)";
		}
		
		document.getElementById("myDropdownMobile" + id).style.display = "flex";
		document.getElementById("arrowMobile" + id).style.transform = "rotate(180deg)";
	} else {
		document.getElementById("myDropdownMobile" + id).style.display = "none";
		document.getElementById("arrowMobile" + id).style.transform = "rotate(0)";
	}
}

let navbarMenu = () => {
	if (document.getElementById("sidePanel").style.display != "flex"){
		document.getElementById("sidePanel").style.display = "flex";
	} else{
		document.getElementById("sidePanel").style.display = "none";
	}
}