const powerTwo = (n) =>{
    return n ** 2
}
function  powerCube(powerTwo, n){
    return powerTwo(n) * n
}
// console.log(powerCube(powerTwo, 3));

function sayHello(){
    return () => {
        console.log("hello world");

    }
}
let guessValue = sayHello()
// console.log(guessValue);
// guessValue()


const higerOrder = n => {
    const oneFun = m => {
        const twoFun = p => {
            return n + m + p
        }
        return twoFun
    }
    return oneFun
}
// console.log(higerOrder(2)(3)(4));

const myNums = [1 , 2 , 3]

const sumArray = arr => {
    let total = 0
    arr.forEach(function(element){
        total += element
    });
    return total
}
// console.log(sumArray(myNums));

function oneMoreHello(){
    console.log("Hello World ");
}
// setInterval(oneMoreHello, 1000)

setTimeout(oneMoreHello, 2000)