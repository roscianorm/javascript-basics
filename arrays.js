// Initialize and declare an array
let fruits = ['Apple', 'Peach', 'Cherry']
console.log(fruits)

// Add more items at the end of the array with push()
let moreFruits = fruits.push('Grape', 'Banana')
console.log(fruits)

// Remove the last element of the array
let lessFruits = fruits.pop()
console.log(fruits)

// Add more items at the begining of the array
let newFruit = fruits.unshift('Orange', 'Watermelon')
console.log(fruits)

// Remove the first item of the array
let removeFruit = fruits.shift()
console.log(fruits)

// Returns the position of the item
let getIndex = fruits.indexOf('Cherry')
console.log(getIndex)
