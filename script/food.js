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
				dogfoodHTML += "<td class='col-md-2'>";
				dogfoodHTML += data.dog_brands[i].name + "</td>";
				dogfoodHTML += "<td class='col-md-5'>";
				dogfoodHTML += "All</td>";
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

// Configure XHR
var catfoodRequest = new XMLHttpRequest();

catfoodRequest.addEventListener("load", catfoodLoad);
catfoodRequest.addEventListener("error", catfoodFail);
catfoodRequest.open("GET", "json/catfood.json");
catfoodRequest.send();

function catfoodFail() {
	console.log("catfood.json FAILED to load.");
}

function catfoodLoad() {
	console.log("catfood.json successfully loaded!");
	var data = JSON.parse(this.responseText);
	var catfoodHTML = "";
	var catfoodSection = document.getElementById("cat-food");

	for (var i = 0; i < data.cat_brands.length; i++) {
		for (var j = 0; j < data.cat_brands[i].types.length; j++) {
			for (var k = 0; k < data.cat_brands[i].types[j].volumes.length; k++) {
				catfoodHTML += "<tr class='row'>";
				catfoodHTML += "<td class='col-md-2'>";
				catfoodHTML += data.cat_brands[i].name + "</td>";
				catfoodHTML += "<td class='col-md-5'>";
				catfoodHTML += data.cat_brands[i].breeds + "</td>";
				catfoodHTML += "<td class='col-md-3'>";
				catfoodHTML += data.cat_brands[i].types[j].type + "</td>";
				catfoodHTML += "<td class='col-md-1 right-aligned'>";
				catfoodHTML += data.cat_brands[i].types[j].volumes[k].name + "</td>";
				catfoodHTML += "<td class='col-md-1 right-aligned'>"
				catfoodHTML += data.cat_brands[i].types[j].volumes[k].price + "</td>";
				catfoodHTML += "</tr>";
			};
		};
	};
	catfoodSection.innerHTML = catfoodHTML;
}









