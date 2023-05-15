// ---------------------------- Assignment 1---------------------------- 
// Work with datatypes in TS such as boolean, any, array of strings, heterogenous arrays with examples.
// Print the output to the console in VS Code
// ---------------- string, boolean ---------------- 
// var userName: string = "myusername";
// var userPass: string = "mypass";
// var isLoggedIn: boolean = false;
// var enterUserName = prompt("Enter a Username: ");
// var enterPass = prompt("Enter a Password: ");
// if (enterUserName === userName && enterPass === userPass) {
//     isLoggedIn = true;
//     console.log("Login successful")
// } else {
//     console.log("Login Failed")
// }
// console.log("isLoggedIn: ", isLoggedIn)
// ---------------- any ---------------- 
var myAnyArray = ['Tejaswini', 92, true];
console.log("My Name is", myAnyArray[0]);
console.log("ID:", myAnyArray[1]);
// ---------------- array of strings ----------------
var myArray = ["Figma", "WebFlow", "Illustrator", "InDesign", "Wordpress"];
console.log("Below are some UI Design Tools:", myArray);
// ---------------- heterogenous array ----------------
var myHArray = myAnyArray;
for (var index = 0; index < myHArray.length; index++) {
    var element = myHArray[index];
    console.log("Heterogenous Array rendering value on", index, "index:", myHArray[index]);
}
// ---------------------------- Assignment 2---------------------------- 
//Work with various Popups available in TypeScript such as alert, confirm, prompt.
//Print the output to the console in VS Code.
// ----- alerts ----- 
alert("Alert popup: This is a alert popup");
// ----- confirm ----- 
if (confirm("Confirm popup: Click OK to continue!") == true) {
    // console.log( "You pressed ok!");    
    // ----- prompt ----- 
    var num1 = prompt("Enter 1st number:");
    var num1_ = parseInt(num1);
    var num2 = prompt("Enter 2nd number:");
    var num2_ = parseInt(num2);
    var sumOfNum = num1_ + num2_;
    console.log(sumOfNum);
}
else {
    console.log("You cancelled!");
}
// ---------------------------- Assignment 3 ---------------------------- 
//Write an enum in TypeScript and access the values and log to the console.
//Also use indexes to access enums.
//An enum is a special "class" that represents a group of constants
var Friends;
(function (Friends) {
    Friends[Friends["Sam"] = 0] = "Sam";
    Friends[Friends["Poo"] = 1] = "Poo";
    Friends[Friends["Saks"] = 2] = "Saks";
})(Friends || (Friends = {}));
var poo = Friends.Poo;
console.log(poo);
console.log(Friends[2]);
