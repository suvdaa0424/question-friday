// Write a function that takes two arguments, string1 and string2. 
// Join these strings together and reverse the newString.

// function add_and_reverse(string1, string2) {
//     // join the strings
//     let newString = string1 + string2
//     // split the combined string into an array
//     newString = newString.split("")
//     // reversed string array
//     let reversedString = []
//     // loop through each letter
//     for (let index = 0; index < 8; index++) {
//         // pop the first letter
//         let letter = newString.pop()
//         // save it to a new array
//         reversedString.push(letter)
//     }
//     reversedString = reversedString.join("")
//     // log the result
//     console.log(reversedString)
//     // return it
//     return reversedString
// }

// add_and_reverse('hello', 'you')

// Write a function that takes two arguments, string1 and string2. 
// Join these strings together and reverse the newString.

function add_and_reverse(string1, string2) {
    // join the strings
    let length = string1.length + string2.length
    let newString = string1 + string2
    // split the combined string into an array
    newString = newString.split("")
    // reversed string array
    let reversedString = []
    // loop through each letter
    for (let index = 0; index < length; index++) {
        // pop the first letter
        let letter = newString.pop()
        // save it to a new array
        reversedString.push(letter)
    }
    reversedString = reversedString.join("")
    // log the result
    console.log(reversedString)
    // return it
    return reversedString
}

add_and_reverse('hello', 'you')

function add_and_reverse(string1, string2) {
    let reverseString1 = string1.split("").reverse().join("")
    let reverseString2 = string2.split("").reverse().join("")
    console.log(reverseString2, reverseString1)
}
add_and_reverse('hello', 'you')