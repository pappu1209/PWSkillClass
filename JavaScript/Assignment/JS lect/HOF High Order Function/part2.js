let arr = [2, 3, 4]
arr.forEach(function(element, index, arr){
    console.log(index, element, arr);
})

arr.forEach((element, index, arr) => {
    console.log("arrow:", index, element, arr);
})


const heros = ["naagraj", "doga", "dhruva", "maniraj"]
heros.forEach((element) => { 
    console.log(element.toUpperCase())
})

const fruits = ["grapes", "banana", "apple", "mango"]
fruits.map(function(element, index, fruits){
    console.log(element.toUpperCase())
})

// filter 

console.log(heros);
const heroWithRaj = heros.filter((h) => {
    return h.endsWith('raj')
})
console.log(heroWithRaj)

// use filter with fruits
console.log(fruits);
const someFruits = fruits.filter((f) => {
    return f.endsWith('go')
})
console.log(someFruits)

// Shopping Cart

const cartBill = [20, 30, 50]
const sumOfCartBill = cartBill.reduce((prev, curr) => prev + curr, 0)
console.log(sumOfCartBill)


// Check if all value are numbers
// console.log(typeof gameScore[1]);
const gameScore = [200, 310, 300,  250, 150]
const gameScoreCheck = gameScore.every((v) => typeof v ===
'number')
console.log("check: ", gameScoreCheck);

// find score above 200

const above200 = gameScore.find((score) => score > 200)
console.log(above200);

// findIndex
// some
// sort