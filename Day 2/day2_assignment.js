// Assignment 1:
// Create a array called arrMax and that array should accept an array of numbers.
// Return the largest number in the array.
// Hint: Use Arrow function and Array.forEach method

let arrMax = [1,2,3,4,5,6,7,8]
smallerVar = 0;
arrMax.forEach(element => {
    if (smallerVar < element)  {
        smallerVar = element;
    }
});

console.log(`The largest number in the array: ${smallerVar}`);



// Assignment 2:
// let list=[1,2,3,4,5,6,7,8,9,10];
// Use the map() function with arrow notation => to multiply each number by 10 and return the result.

let list = [1,2,3,4,5,6,7,8,9,10];
let result = [];

result = list.map(
    (value, index) => {
        return {
            index,
            r: value * 10
        }
});

//result = list.map(element => element * 10);
console.log(result)



// Assignment 3:
// Write an arrow function named sumEvens that accepts an array of numbers and returns the sum of the even numbers in the array.
// HINT: Use a for...of statement.

const sumEvens = (arr) => {
    let sum = 0;
    for(const num of arr){
        if (num % 2 === 0) {
            sum += num;
        }
    }
    return sum;
}

console.log(sumEvens([1,2,3,4,5,6]));




// Assignment 4:
// let numbers = [4, -4, 10, 203, 53, 11];
// Use reduce() method to find the minimum value in an array.

let numbers = [4, -4, 10, 203, 53, 11];

function minValue (acc,cur) {
    return Math.min(acc,cur);
}

console.log("The minimum value: "+numbers.reduce(minValue));














// //Using map function with arrow notation to multipy each number by 10 and return the result

// let list = [1,2,3,4,5,6,7,8,9,10];
// console.log(list)
// let resultList = [];

// resultList = list.map(
//     (element, index) => {
//        return{
//         index, 
//         newlist: element * 10
//        }
//     }
// )

// let list1 = list.map(functions);
// console.log(list1)

// function functions(num) {
//     return  num * 10;
// }


// let x = [];
// x = [0,1,2].map(
//     i => {
//         return i + 1
//     }
// )
