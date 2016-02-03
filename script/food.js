// Configure XHR
var dogfoodRequest = new XMLHttpRequest();

dogfoodRequest.addEventListener("load", dogfoodLoad);
dogfoodRequest.addEventListener("error", dogfoodFail);
dogfoodRequest.open("GET", "json/dogfood.json");
dogfoodRequest.send();

function dogfoodFail() {
	console.log("dogfood.json FAILED to load.");
}

function dogfoodLoad() {
	console.log("dogfood.json successfully loaded!");
	var data = JSON.parse(this.responseText);
	var dogfoodHTML = "";
	var dogfoodSection = document.getElementById("dog-food");

	for (var i = 0; i < data.dog_brands.length; i++) {
		for (var j = 0; j < data.dog_brands[i].types.length; j++) {
			for (var k = 0; k < data.dog_brands[i].types[j].volumes.length; k++) {
				dogfoodHTML += "<tr class='row'>";
				dogfoodHTML += "<td class='col-md-7'>";
				dogfoodHTML += data.dog_brands[i].name + "</td>";
				//dogfoodHTML += "<td class='col-md-4'>";
				//dogfoodHTML += "All</td>";
				dogfoodHTML += "<td class='col-md-3'>";
				dogfoodHTML += data.dog_brands[i].types[j].type + "</td>";
				dogfoodHTML += "<td class='col-md-1 right-aligned'>";
				dogfoodHTML += data.dog_brands[i].types[j].volumes[k].name + "</td>";
				dogfoodHTML += "<td class='col-md-1 right-aligned'>"
				dogfoodHTML += data.dog_brands[i].types[j].volumes[k].price + "</td>";
				dogfoodHTML += "</tr>";
			};
		};
	};
	dogfoodSection.innerHTML = dogfoodHTML;
}





