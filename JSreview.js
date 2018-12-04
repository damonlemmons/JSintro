// The World Translator
// Write a function named helloWorld that:
//
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
// Test the function for each of the supported languages

//
// var langCode = "es"
// var langCode1 = "en"
// var langCode2 = "de"
// var langCode3 = "fr"


// function helloWorld(code) {
//     if(code === "en") {
//         return "Hello World"
//     } else if(code === "es") {
//         return "Hola Mundo"
//     } else if(code === "de") {
//         return "Hallo Welt"
//     } else {
//         return "Hello World"
//     }
// }


// var langCode = "es"
// var langCode1 = "en"
// var langCode2 = "de"
// var langCode3 = "fr"
//
// //creating a function that takes in a language code and outputs the message in the correct language
// function helloWorld(code) {
//     //if else statement that evaluates the language code and connects it to the correct phrase
//     if(code === "es") {
//         return "Hola Mundo"
//     } else if(code === "de") {
//         return "Hallo Welt"
//     //This else catches all other cases including the 'en'
//     } else {
//         return "Hello World"
//     }
// }

// //console.log because the function has returns and we want to see the output
// console.log(helloWorld(langCode))
//
var arr1 = [1, 4, 75, 10, 53]

function highestNumber(arr) {
    var greatestNum = arr[0]
    arr.forEach(function(el){
        if(el > greatestNum)
        greatestNum = el
    })
    return greatestNum
}
//
console.log(highestNumber(arr1))
//

var arr1 = [-4, -2, -10, -1, -53, -10]

function highestNumber(arr) {
    var greatestNum = arr[0]
    arr.forEach(function(el){
        if(el > greatestNum)
        greatestNum = el
    })
    return greatestNum
}

console.log(highestNumber(arr1))
//
//
//
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for(i = numbers.length - 1, i > 0, i--)
