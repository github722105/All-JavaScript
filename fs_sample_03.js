// Sample program #3 using fs module.

var fs = require("fs");
fs.writeFile("fs_sample_03.txt", "Node was here.", function(error) {
    if (error) {
        console.log("Failed to write file:", error);
    } else {
        console.log("File written.");
    }
});
