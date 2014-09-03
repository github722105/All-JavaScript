// Sample program # 2 using fs module.

var fs = require("fs");
fs.readFile("fs_sample_01.js", function(error, buffer) {
    if (error) {
        throw error;
    }
    console.log("The file contains:", buffer.length, "bytes.", "The first byte is: ", buffer[0]);
});
