// Sample program using fs module.

var fs = require("fs");
fs.readFile("fs_sample_01.js", "utf8", function(error, text) {
    if (error) {
        throw error;
    }
    console.log("The file contains:", text);
});
