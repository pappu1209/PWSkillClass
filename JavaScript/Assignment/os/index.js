const os = require('os');

// console.log("cpu architecture" + os.arch());

// console.log("Free memory:" + os.freemem() );

// console.log("Total memory:" + os.totalmem());

// console.log("network interfaces:" + JSON.stringify(os.networkInterfaces()));

// console.log("OS default temp dir:" + os.tmpdir());

console.log("Endianess: " + os.endianness());

console.log("Hostname: " + os.hostname());

console.log("OS Type: " + os.type());

console.log("OS Platform: " + os.platform())

console.log("OS Release: " + os.release());