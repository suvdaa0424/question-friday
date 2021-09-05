randomStrings = ['elephant', 'cat', 'penguin', 'bird', 'dog', 'rat', 'lion', 'parrot']

function fourOrMore(array) {
    let newArray = []
    for (let index = 0; index < array.length; index++) {
        const word = array[index];
        if (word.length >= 4) {
            newArray.push(word)
        }
        
    }
    console.log(newArray)
}
fourOrMore(randomStrings)