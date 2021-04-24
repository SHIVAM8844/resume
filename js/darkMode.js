var tmp = localStorage.getItem("dm");
var bdyTag = [];
bdyTag.push(document.getElementsByClassName("list-group-item"));
bdyTag.push(document.getElementsByClassName("card-title"));
bdyTag.push(document.getElementsByClassName("card-body"));
bdyTag.push(document.getElementsByTagName("p"));
bdyTag.push(document.getElementsByClassName("edu-icons"));
bdyTag.push(document.getElementsByClassName("card-img-top"));
bdyTag.push(document.getElementsByTagName("body"));
console.log(bdyTag);
if(tmp == "night"){
	for(var i = 0; i < bdyTag.length; i++) {
		for(var j = 0; j < bdyTag[i].length; j++) {
			bdyTag[i][j].classList.add("dark-mode");
		}
	}
}
	
else{
	for(var i = 0; i < bdyTag.length; i++) {
		for(var j = 0; j < bdyTag[i].length; j++) {
			bdyTag[i][j].classList.remove("dark-mode");
		}
	}
}


function darker() {	
	var tmp = localStorage.getItem("dm");
	
	if(tmp == "day"){
		localStorage.setItem("dm", "night");
		for(var i = 0; i < bdyTag.length; i++) {
			for(var j = 0; j < bdyTag[i].length; j++) {
				bdyTag[i][j].classList.add("dark-mode");
			}
		}
	}
	
	else{
		localStorage.setItem("dm", "day");
		for(var i = 0; i < bdyTag.length; i++) {
			for(var j = 0; j < bdyTag[i].length; j++) {
				bdyTag[i][j].classList.remove("dark-mode");
			}
		}
	}

}