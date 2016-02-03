// Configure XHR
var dogfoodRequest = new XMLHttpRequest();

dogfoodRequest.addEventListener("load", dogfoodLoad);
dogfoodRequest.addEventListener("error", dogfoodFail);
// dogfoodRequest.addEventListener("progress", dogfoodProgress);
dogfoodRequest.open("GET", "json/dogfood.json");
dogfoodRequest.send();

function dogfoodLoad() {
	console.log("dogfood.json successfully loaded!");
}

function dogfoodFail() {
	console.log("dogfood.json FAILED to load.");
}

