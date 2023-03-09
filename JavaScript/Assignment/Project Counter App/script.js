/*
const inc = document.querySelector("#inc"),
dec = document.querySelector("#dec"),
num = document.querySelector("#num"),
res = document.querySelector("#res");
let a = 1;

inc.addEventListener("click", ()=>{
a++;
num.innerText = a;
console.log(a)
});
dec.addEventListener("click", ()=>{
    a--;
    num.innerText = a;
});
res.addEventListener("click", ()=>{
    num.innerText = 0;
});
*/
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
const num = document.getElementById("num");
const res = document.getElementById("res");

// for increment button
inc.addEventListener("click", ()=>{
    const value = Number(num.innerText);
    if (value >= 10){
        alert("10+ value not allowed");
    }
    else{
        num.innerText = value + 1;
    }
});

// for decrement buton
dec.addEventListener("click", ()=>{
    const value = Number(num.innerText);
    if(value > 0){
        num.innerText = value - 1;
    }
    else{
        alert("Negative value not allowed");
    }
});

// for reset buuton
res.addEventListener("click", ()=>{
    num.innerText = 0;
});