// JSON related programs.

var string = JSON.stringify({name: "Ferdinand De Ramos", born: 1957});
console.log(string);
console.log(JSON.parse(string).born);