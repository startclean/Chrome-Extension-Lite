document.addEventListener("DOMContentLoaded", function() {
	chrome.storage.sync.get({"colourvalue": "#b5b5a4"}, colourCallback);
});
var colourCallback = function(list) {
var colour = list["colourvalue"];
console.log(colour);
document.body.style.color = colour;
for (var i = 0; i < document.getElementsByClassName("title").length; i++) {
    document.getElementsByClassName("title")[i].style.color = colour;
    document.getElementsByClassName("title")[i].style.borderBottom = "1px solid " + colour;
}
for (var i = 0; i < document.querySelectorAll("#topsites > li > a").length; i++) {
    document.querySelectorAll("#topsites > li > a")[i].style.color = colour;
}	
for (var i = 0; i < document.querySelectorAll("ul > li > a").length; i++) {
    document.querySelectorAll("ul > li > a")[i].style.color = colour;
}
};
