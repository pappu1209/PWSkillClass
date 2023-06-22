// Write a code Of Rest Operators +++++++++++++++++++++++++++++++++++

function argumennts(){
    let arg = Array.from(arguments)
    let finalarr = arg.map(e => e)
    console.log(finalarr)
}
argumennts(1,2,3);
argumennts(1,2,3,4,5,6,7);


function add(...input){
    console.log(input)
    let total = 0;
    for(let i of input){
        total += i;
    }
    console.log(total)
}
add(1,2,3,4,5,6,7,8,9);