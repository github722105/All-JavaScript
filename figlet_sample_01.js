// Sample JS program using figlet module.

var figlet = require("figlet");
figlet.text("FERDINAND DERAMOS", function(error, data) {
    if (error)
        console.error(error);
    else
        console.log(data);
});
