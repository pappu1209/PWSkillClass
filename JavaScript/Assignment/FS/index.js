const fs = require('fs');

// console.log('READ START');
// // Asynchoronous way to read file
// // fs.readFile('input.txt', function(err, data){
// //     if (err){
// //         console.log('Error:', err);
// //         return err;
// //     }
// //     console.log('Data:',data.toString());
// //     console.log('READ END');
// //     return data;
// // });
// // console.log('OTHER STUFF');


// // synchoronous way to read file

// var data = fs.readFileSync('input.txt');
// console.log('Data:', data.toString());
// console.log('READ END');
// console.log('OTHER STUFF');

//Read > Open + read
// const buf = new Buffer(1024);

// fs.open('input.txt', 'r+', function(err, fd){
//     if (err) {
//         console.log('Error in opening file: ',err);
//     }
//     console.log("File open successfully!");
    
//     fs.read(fd, buf, 0, buf.length, 0, function(er, bytes){
//         if (er){
//             console.log('Error in reading file!');
//         }
//         console.log('Data:', bytes);
//         console.log('Data:', buf.slice(0, bytes).toString());
//         fs.close(fd, function(err){
//             if (err) {
//                 console.log('Error in Closing file');
//             } else {
//                 console.log('Success in closing file');
//             }
//         })
//     })


// });

// Writing to File ------------------

// fs.writeFile('input.txt', 'pw skills', function(err){
//     if (err) {
//         console.log('Error in writing file!');
//     } else {
//         console.log('success in writing file!');
//     }
// });

// Appending to file ----------------

// fs.appendFile('input.txt', '-- prince kr Rawani', 'utf8',function(err){
//     if (err) {
//         console.log('Error in appending file!');
//     } else {
//         console.log('Success in appending file!');
//     }
// })

// deleting file -------

fs.unlink('input.txt', function(err){
    if (err) {
        console.log('Error in deleting file');
    } else {
        console.log('Success in deleting file');
    }
})
