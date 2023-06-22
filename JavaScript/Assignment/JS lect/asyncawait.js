function createPromise(){
    return new Promise(function exec(reslove, reject){
        // your code goes here
        setTimeout(function f(){
            console.log("timer done");
            reslove("done");
        }, 3000 );
    });
}

async function consume(){
    console.log("inside function");
    const response = await createPromise();
    console.log("response is", response);
}
console.log("start");
consume();
console.log("end");