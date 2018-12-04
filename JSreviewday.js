//Write a function that takes in two or more arrays (of numbers) and checks for duplicates.  The function should output a new array with only the unique numbers.

// var a = [1, 2, 3];
// var b = [2, 30, 1];
// var c = [2, 4, 5, 6, 7, 0]
// var d = [2, 10, 5, 3, 7, 0]

// function to merge two arrays, takes in two arrays as arguments returns one array with no duplicate values
//
// function mergeArray(array1, array2, array3, array4) {
//     // create empty array to hold new deduped array
//     var deduped = [];
//
//     // create one large array to iterate over
//     var combinedArray = array1.concat(array2, array3, array4)
//     console.log(combinedArray);
//
//     // loop through the cokmbined array to add each unique item to deduped array
//     for (var index=0; index < combinedArray.length; index++) {
//         if(!deduped.includes(combinedArr[i])) {
//             // add the value to dedupe
//             deduped.push(combinedArray[index])
//         }
//     }
//     return deduped
// }
//
// console.log(mergeArray(a, b))
//
// console.log(mergeArray(d, c))





//Create a function that takes in a word and returns whether or not the word is a palindrome (same forward and backward).  Start with a word as an argument, then copy / paste and refactor to account for sentences and capital letters. Do not worry about punctuation.

//Hints:
//you do not need any loops
//you can chain built-in methods
//
// var testSentence1 = "Nomad DaMon"
// // expected output:  "yes Nomad DaMon is a palindrome"
//
// function palinDrome(str) {
//     //make string all lower case
//     var lowerCase = str.toLowerCase()
//     //take lowercase string, put it into an array, reverse the order, and then join it back as a string.
//     var reverse = lowerCase.split("").reverse().join("")
//
//     console.log(lowerCase);
//     console.log(reverse);
//     //use an if / else statement to compare lowercase and reverse strings
//         if (lowerCase === reverse) {
//             console.log("Yes " + str + " is a palindrome")
//         } else {
//             console.log("No " + str + " is not a palindrome")
//         }
// }
//
// palinDrome(testSentence1)

//
// Create a function that takes in a sentence and returns only the consonants (removes the vowels).
//
// hint: you will need a loop
// hint: use the .includes() method
//
// var sentence = "This website is awesome"
// //expected output "Ths wbst s wsm"
//
// function removeVowels(str) {
//     var newArr = []
//     var vowels = ["a","e","i","o","u"]
//     var combined = str.toLowerCase().split("")
//     console.log(combined);
//     for(let i = 0; i < combined.length; i++){
//         if (!vowels.includes(combined[i])){
//             newArr.push(combined[i])
//         }
//     }
//     var join = newArr.join("")
//         return join
// }
//
// console.log(removeVowels(sentence));
