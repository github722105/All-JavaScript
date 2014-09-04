// Function that returns another function.

function multiplier(factor) {
  return function(number) {
             return number * factor;
         };
}

var twice = multiplier(2);
console.log(twice(5));
