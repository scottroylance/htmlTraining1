var maintitle = document.getElementById("mainTitle");

console.log("This is an element of type: ", mainTitle.nodeType);
console.log("the Inner HTML is " ,mainTitle.innerHTML);
console.log("Child nodes: ", mainTitle.childNodes.length);

var myLinks = document.getElementsByTagName("a");
console.log("Links: ", myLinks.length);

console.log("Apparently, these logs are a quick way to survey the website to learn more about it. Yay...")