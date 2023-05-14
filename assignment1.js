// Output your name to web browser
// let userName = "Tejaswini"
// console.log(userName)
// console.log(typeof userName)

document.write("<h3>Assignment 1</h3>");

//Displaying name in italics on web browser
document.write("Rendering name in web browser: <em> Tejaswini </em><br>");
document.write("Born in Aurangabad<br><br>");

//Displaying hobbies in an unordered list
document.write("Hobbies:")
document.write("<ul><li>Cooking</li><li>Designing</li></ul>")


document.write("<br><h3>Assignment 2</h3>");
document.write("<p>Check console you see the result for checking the integer is number or not </p>");
document.write("<p>Click the button to get the result printed in console for checking integers type</p>")

// Checking if number is an interger using function
function test (num1){
    console.log(num1 + " is a " + typeof num1) 
}


document.write("<br><h3>Assignment 3</h3>");
document.write("<p>Check console you see the result for current date </p>");
//Displaying date in console
const d = new Date();
console.log(d)
