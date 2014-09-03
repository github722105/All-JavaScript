// Sample JS program using figlet module.

var figlet = require("figlet");
figlet.text("Lumban Academy\n\n  \n\nClass of 1974", function(error, data) {
    if (error)
        console.error(error);
    else
        console.log(data);
});
