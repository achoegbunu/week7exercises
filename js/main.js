var myH1 = document.getElementById("myH1");
	myH1.innerHTML = "some text!";
var myNewH1 = document.getElementById("myNewH1")	



function getInfo () {
var value =	document.getElementById("userInfo").value;
	console.log(value);
	myNewH1.innerHTML = value;
}

var stringArray = ["coolest", "string", "array", "out", "there"];

for (var i = 0; i < stringArray.length; i++) {
 	console.log(stringArray[i]);
 } 

 var myObj = {
 	name: "acho",
 	age: 34,
 	isCool: true

 }

 
 