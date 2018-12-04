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

//Create a function that takes in a word and returns whether or not the word is a palindrome (same forward and backward).

//Hint:
//you do not need any loops

// Var testWord1 = “nomad”
// //expected output = “no nomad is not a palindrome”
//
// STRETCH: copy / paste and refactor to account for sentences and capital letters. Do not worry about punctuation.
//
// var testSentence1 = "Nomad DaMon"
// // expected output:  "yes Nomad DaMon is a palindrome"


// function palindrome(word){
//     var reverseString = word.split("").reverse().join("")
//     if(word === reverseString){
//         console.log(word + " is a palindrome")
//     } else {
//         console.log(word + " is not a palindrom")
//     }
// }
//
//
// palindrome("racecar")

// Write a function that takes in two or more arrays (of numbers) and checks for duplicates.  The function should output a new array with only the unique numbers.
//
// var a = [1, 2, 3, 5, 10];
// var b = [2, 30, 1, 17];
//
// // create function that takes in two arrays and returns a new array with no duplicates
//
// function dedupe(arr1, arr2){
//     //create an empty array to push numbers into
//     var emptyArr = []
//     //concat the two arrays
//     var combinedArr = arr1.concat(arr2)
//     // console.log(combinedArr);
//
//     //compare the concatenated array to the empty array for duplciated
//     for(let i = 0; i < combinedArr.length; i++){
//         if(!emptyArr.includes(combinedArr[i])) {
//     //push if not included in empty array
//             emptyArr.push(combinedArr[i])
//         }
//     }
//     return emptyArr
// }
//
// console.log(dedupe(a, b))


// function removeVowels(str) {
//     //create black array that will be returned
//     var newArr = []
//     //create a vowels array for comparison
//     var vowels = ["a","e","i","o","u"]
//     //create a variable to hold an array of the string argument.
//     var combined = str.toLowerCase().split("")
//     console.log(combined);
//     //use for loop to compare argument array against vowels array.
//     for(let i = 0; i < combined.length; i++){
//         if (!vowels.includes(combined[i])){
//             newArr.push(combined[i])
//         }
//     }
//     // put array back to a string
//     var join = newArr.join("")
//     //return new array with vowels removed
//         return join
// }
//
// console.log(removeVowels(sentence));
// var sentence = "This website is awesome!"
//
// function removeVowels(str) {
//     //create black array that will be returned
//     // var newArr = []
//     //create a vowels array for comparison
//     var vowels = ["a","e","i","o","u"]
//     //create a variable to hold an array of the string argument.
//     var combdined = str.toLowerCase().split("")
//     console.log(combined);
//     //use for loop to compare argument array against vowels array.
//     // for(let i = 0; i < combined.length; i++){
//     //     if (!vowels.includes(combined[i])){
//     //         newArr.push(combined[i])
//     //     }
//     // }
//  We can do this with filter instead of a for loop
//     var newArr = combined.filter(v => !vowels.includes(v))
//
//     console.log(newArr);
//
//     // put array back to a string
//     var join = newArr.join("")
//     //return new array with vowels removed
//         return join
// }
//
// console.log(removeVowels(sentence));
