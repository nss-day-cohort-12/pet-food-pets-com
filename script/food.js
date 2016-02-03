// Configure XHR
var dogfoodRequest = new XMLHttpRequest();
// var data = {};


dogfoodRequest.addEventListener("load", dogfoodLoad);
dogfoodRequest.addEventListener("error", dogfoodFail);
// dogfoodRequest.addEventListener("progress", dogfoodProgress);
dogfoodRequest.open("GET", "json/dogfood.json");
dogfoodRequest.send();

function dogfoodLoad() {
	
	console.log("dogfood.json successfully loaded!");
	// console.log(this.responseText);
	var data = JSON.parse(this.responseText);
	// console.log("Data: ",data);
	// console.log("1st Brand Obj: ", data.dog_brands[0]);
	// console.log("1st Brand Name: ", data.dog_brands[0].name);
	// console.log("1st Brand 1st Type Name: ", data.dog_brands[0].types[0].type);
	// console.log("1st Brand 1st Type 1st Volume Name: ", data.dog_brands[0].types[0].volumes[0].name);
	// console.log("1st Brand 1st Type 1st Volume Price: ", data.dog_brands[0].types[0].volumes[0].price);
	loopTest(data);
}

function dogfoodFail() {
	console.log("dogfood.json FAILED to load.");
}

function loopTest(data) {
	console.log("~~~ LOOP TEST ~~~");

	var dogfoodHTML = "";
	var dogfoodSection = document.getElementById("dog-food");

	for (var i = 0; i < data.dog_brands.length; i++) {
		for (var j = 0; j < data.dog_brands[i].types.length; j++) {
			for (var k = 0; k < data.dog_brands[i].types[j].volumes.length; k++) {
				dogfoodHTML += "<tr class='row'>";
				dogfoodHTML += "<td class='col-md-3'>";
				dogfoodHTML += data.dog_brands[i].name + "</td>";
				dogfoodHTML += "<td class='col-md-4'>";
				dogfoodHTML += "All</td>";
				dogfoodHTML += "<td class='col-md-3'>";
				dogfoodHTML += data.dog_brands[i].types[j].type + "</td>";
				dogfoodHTML += "<td class='col-md-1'>";
				dogfoodHTML += data.dog_brands[i].types[j].volumes[k].name + "</td>";
				dogfoodHTML += "<td class='col-md-1'>"
				dogfoodHTML += data.dog_brands[i].types[j].volumes[k].price + "</td>";
				dogfoodHTML += "</tr>";

				console.log(data.dog_brands[i].name); // Chuck Wagon, Purina
				console.log("  " + data.dog_brands[i].types[j].type); // All natural, standard, puppy
				console.log("    " + data.dog_brands[i].types[j].volumes[k].name);
				console.log("    " + data.dog_brands[i].types[j].volumes[k].price);
			};
		};
	};

	dogfoodSection.innerHTML = dogfoodHTML;
}







