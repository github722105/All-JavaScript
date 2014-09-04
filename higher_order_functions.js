// Examples of Higher-Order functions.
// Functions that operate on other function or return a function.

function greaterThan(n) {
    return function(m) { return m > n; };
}

var greaterThan10 = greaterThan(10);
console.log( greaterThan10(11) );

// Function that change other function.
function noisy(f) {
  return function(arg) {
    console.log("calling with: ", arg);
    var val = f(arg);
    console.log("called with: ", arg, " - got: ", val);
    return val;
  };
}

noisy(Boolean)(0);

// Functions that provide new types of control flow.
function unless(test, then) {
    if (!test) then();
}

function repeat(times, body) {
    for (var i = 0; i < times; i++) body(i);
}

repeat(6, function(n) {
    unless(n % 2, function() {
        console.log(n, "is even");
    });
});