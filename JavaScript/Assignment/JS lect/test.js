// const sum = eval("10*10+5");
// console.log(sum);

// var num = 8;
// var num = 10;
// console.log(num);

// console.log(typeof typeof 1);

// const numbers = [1,2,3]
// numbers [10] = 11;
// console.log(numbers);


// console.log(3 + 4 +"5");

// console.log("I enrolled pw skill"[0]);

// const Name = "pw skill";
// // console.log(Name());


// error handlig asssignment ++++++++++++++++++++++++++

function convertToNumber(str) {
    try {
    const num = Number(str);
    if (isNaN(num)) {
        throw new Error('Invalid number');
    }
    return num;
    } catch (err) {
    return err.message;
    }
}
console.log(convertToNumber('123')); // 123
console.log(convertToNumber('3.14')); // 3.14
console.log(convertToNumber('foo')); // "Invalid number"
console.log(convertToNumber('123abc')); // "Invalid number"










