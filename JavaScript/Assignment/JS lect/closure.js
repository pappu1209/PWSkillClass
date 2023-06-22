let score = 4
function one(){
    let score = 0
    console.log(score);
}

function two(){
    let score = 3
    console.log(score);
}
function three(){
    console.log(score);
}


// one()
// two()
// three()
// console.log(score);


function outerFunc(){
    let outerVar = 'I am at scope level 1'
    function innerFunc(){
        let innerVar = "I am at scope level 2"
        console.log(outerVar);
    }
    // console.log(innerVar);
    innerFunc()
}
// outerFunc()




const myGlobalValue = 0

function fun(){
    const val1 = 1
    console.log(myGlobalValue);

    function innerofFunc(){
        const val2 = 2
        console.log(val2, val1, myGlobalValue);
        function innerofInnerfunc(){
            const val3 = 3
            console.log(val3, val2, val3, myGlobalValue);

        }
        innerofInnerfunc()
    }
    innerofFunc()
}
// fun()

// closure ++++++++++++++++++++++

function superFunc(){
    let outerValue = 'i am outer'
    function minorFunc(){
        console.log(outerValue);
    }
    minorFunc()
}
// superFunc()

const errorMessage = "file not found"
setTimeout(function callback(){
    console.log(errorMessage);
},1000)


let pageCount = 0
const items = [2, 3, 4, 5, 6]
items.forEach(function iterator(num){
    pageCount ++ 
    console.log(num);
})
console.log("page count", pageCount);