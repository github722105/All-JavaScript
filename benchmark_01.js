var arr = new Array(1000000);

for (var i = 0; i < arr.length; i++) {
  arr[i] = Math.random();
}

console.trace();

console.time("for-loop-1");
var sum = 0;
for (var i in arr) {
  sum += arr[i];
}
console.timeEnd("for-loop-1");
console.log(sum);

console.trace();

console.time("for-loop-2");
var total = 0;
for (var j = 0; j < arr.length; j++) {
  total += arr[j];
}
console.timeEnd("for-loop-2");
console.log(total);

console.trace();

