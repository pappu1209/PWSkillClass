
// map methode using with array +++++++++++++++++++++++++++++++++
const ary = [1,2,3,4];
let b = ary.map(test)
console.log(b);
function test(x){
    return x * 10;
}


// map method using "string" ++++++++++++++++++++++++++++++++++++++
const oldarr = ['Rahul', 'Kumar', 'Singh'];
const newarr = oldarr.map(function(el){
    return el;
});
console.log(newarr);


// advaced use of map methode  +++++++++++++++++++++++++

const studentdata = [
    {id: 1, name: 'Rahul', degree: 'MCS'},
    {id: 2, name: 'Ram', degree: 'MCA'},
    {id: 3, name: 'Raju', degree: 'MSC'},
]
const newdata = studentdata.map( (cvalue) => {
return `my name is ${cvalue.name}`;
});
console.log(newdata);


// double value of array using map  arrow function  ++++++++++++++

const number = [1,2,3,4,5];
const dblnumber = number.map( (number) => {
    return number * 2;
});

console.log(dblnumber);