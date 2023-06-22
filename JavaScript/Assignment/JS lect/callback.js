// function h(x, fn){
//     // h -> is a hof
//     // fn -> callback

//     console.log(x*x);
//     fn(x*x);
// }

// h(10, exec)

// function exec(n){
//     console.log("squared value is", n);
// }

console.log("start");
setTimeout(function f(){
    console.log("timer done");
}, 1000);


console.log("end");
for(let i = 0; i < 10000000000; i++){}