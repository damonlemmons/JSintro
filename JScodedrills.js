
// If/else
//
// Write an if/else statement that considers two variables (numbers) and returns/logs the higher number.  Have “catch all” statement that takes care of numbers that are equal.
//
//
// Arrays
//
// Start w/ and empty array
// Push 4 names into the array
// Start another empty array
// Push 4 names into that array
// Combine the two arrays into a new array without changing the original array


// Loops

//write a 3 loops (1 for loop, 1 while loop and 1 forEach loop) that iterates through an array and returns the same array with every number mult. by 3.

// var arr1 = [3, 8, 20, 4, 2]

//expected output [9, 24, 60, 12, 6]

//for loop

// var arr1 = [3, 8, 20, 4, 2]
//
// for (let i=0; i<arr1.length; i++){
//     arr1[i] *= 3
// }
//
// console.log(arr1);


//while loop

// let i = 0
//
// while (i < arr1.length){
//     arr1[i] *= 3
//     i++
// }
//
// console.log(arr1);



//forEach loop

// var arr1 = [3, 8, 20, 4, 2]
//
// arr1.forEach(function(el, i){
//     arr1[i] = el * 3
// })
//
// console.log(arr1);



//stretch 1:  Turn each loop into a function.
// testArr1 = [3, 8, 20, 4, 2]



//stretch 2:  Refactor your function to return a new array instead of mutating the original arry.

// var testArr1 = [3, 8, 20, 4, 2]
//
// function mult3(arr){
//     var arr1 = []
//     for(let i = 0; i < arr.length; i++){
//         arr1.push(arr[i] * 3)
//     }
//     return arr1
// }
//
// console.log(mult3(testArr1))

// var arr = [3, 10, 5 , 4]
//
for(i=0; i < arr.length; i++) {
    console.log(arr[i] * 3)
}


for(i=0; i < arr.length; i++) {
    console.log(arr[i] * 3)
}
//
// arr.forEach(function(el) {
//     console.log(el * 3);
// })
//
// var i = 0
//
// while (i < arr.length) {
//     console.log(arr[i] * 3)
//     i++
// }
