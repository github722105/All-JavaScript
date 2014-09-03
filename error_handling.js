// Error handling on JS using try/catch block.

function sqrRoot(x) {
    try {
        if (x == "") {
            throw {message: "Can't square root Nothing"};
        } else if (isNaN(x)) {
            throw {message: "Can't square root a String"};
        } else if (x < 0) {
            throw {message: "Can't square root a Negative Number"};
        }
        return "sqrt(" + x + ") = " + Math.sqrt(x);
    } catch (err) {
        return err.message;
    }
}

function writeIt() {
    console.log(sqrRoot("Four"));
    console.log(sqrRoot(""));
    console.log(sqrRoot(-4));
    console.log(sqrRoot(4));
}

writeIt();

// Try to assign to x an undefined variable named badVarName.
try {
    var x = badVarName;
} catch (err) {
    console.log(err.name + ': "' + err.message + '" occurred when assigning bad value to x.');
}
