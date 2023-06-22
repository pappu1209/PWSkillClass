function createPromise(){
    return new Promise(function exec(reslove, reject){
        // your code goes here
        setTimeout(function f(){
            console.log("timer done");
            reslove("done");
        }, 3000 );
    });
}


console.log("Start");
let x =  createPromise()
console.log("got a new promise");
x.then(function f(){
    console.log("promise done");
});

console.log("end");

for(let i = 0; i < 10000000000; i++){}