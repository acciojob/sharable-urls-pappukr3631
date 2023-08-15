// your code here
const url = document.getElementById("url");

function process() {
	url.innerText = "https://localhost:8080/";
	
	const name = document.getElementById("name");
	const year = document.getElementById("year");
	if(name.value == "" && year.value == "")
		return;
	
	url.innerText += "?";
	if(name.value != "") {
		url.innerText += "name=" + name.value;
		if(year.value != "")
			url.innerText += "&";
	}

	if(year.value != "") {
		url.innerText += "year=" + year.value;
	}
}