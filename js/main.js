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

 console.log(myObj.name);
 console.log(myObj.age);
 console.log(myObj.isCool);

 var heading1 = document.getElementById("heading1");
 var heading2 = document.getElementById("heading2");
 var heading3 = document.getElementById("heading3");

 heading1.innerHTML = myObj.name;
 heading2.innerHTML = myObj.age;
 heading3.innerHTML = myObj.isCool;

 var myArray = [
        {
        	name: "Aladi",
        	gender: "female",
        	relation: "sister"
        },

        {
        	name: "Adejo",
        	gender: "male",
        	relation: "brother"
        },

        {
        	name: "Gabriel",
        	gender: "male",
        	relation: "uncle"
        }
 ];

 for (var i = 0; i < myArray.length; i++) {
 	console.log(myArray[i].name);
 	console.log(myArray[i].gender);
 	console.log(myArray[i].relation);
 }

 document.body.style.color = "red";
 