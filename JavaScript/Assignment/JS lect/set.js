

// Create set +++++++++++++++++++++++++++
const myset = new Set();
myset.add(1);
myset.add(2);
myset.add(3);
myset.add(4);
myset.add("Hi I am Javascript set");
myset.add("hello world")

// check the size ++++++++++++++++++++++++++++++++++++++++++++
console.log(myset.size);

//  check the exist value +++++++++++++++++++++++++++++++++++
console.log(myset.has(5));

// delete the set value ++++++++++++++++++++++++++++++++++++++
console.log(myset.delete("Hi I am Javascript set"))

// iterate value of set +++++++++++++++++++++++++++++++++++++++++

for(let setvalue of myset){
    console.log(setvalue);
}

// relation to array of set +++++++++++++++++++++++++++++++++++++

arr = [1,2,3,4,5,6,6,8,8]
const arrset = new Set(arr);
for(let value of arrset){
    console.log(value);
}
console.log(arrset.size);

// Remove duplicate values of set use spread operator ++++++++++++++++++++++
const arry = [1,2,3,4,4,5,5,6,8,8,7,7];
console.log([...new Set(arry)]);


// relation to strings ++++++++++++++++++++
const text = "India"
const mset = new Set(text);
console.log(mset)

clearInterval()