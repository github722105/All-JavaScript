// Sample program using anonymous functions.

function doCalc(n1, n2, calcFunction) {
    return calcFunction(n1, n2);
}


function addFunc(n1, n2) {
    return n1 + n2;
}


console.log( doCalc(6, 11, addFunc) );

console.log( doCalc(5, 10, function(n1, n2) { return n1 + n2; }) );
console.log( doCalc(5, 10, function(n1, n2) { return n1 * n2; }) );
console.log( doCalc(5, 10, function(n1, n2) { return n1 - n2; }) );
console.log( doCalc(5, 10, function(n1, n2) { return n1 / n2; }) );
console.log( doCalc(5, 10, function(n1, n2) { return n1 % n2; }) );
