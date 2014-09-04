// Recursive function implementation of isEven.

function isEven(number) {
    if (number == 0) {
        return true;
    } else if (number == 1) {
        return false;
    } else if (number > 0) {
        return isEven(number - 2);
    } else if (number < 0) {
        return isEven(number + 2);
    }
}

console.log("isEven(50): ", isEven(50));
console.log("isEven(75): ", isEven(75));
console.log("isEven(-50): ", isEven(-50));
console.log("isEven(-75): ", isEven(-75));
