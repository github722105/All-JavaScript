// Studying Regular Expressions for JS.

var re1 = new RegExp("abc");
var re2 = /abc/;

var re3 = new RegExp("def");
var re4 = /abc/;

var eighteenPlus = /eighteen\+/;

console.log(/abc/.test("abcdef"));
console.log(/abc/.test("abzdef"));

console.log(re1.test("xxxabcdef"));

console.log("abcdef".indexOf("bcd"));

console.log(/[0123456789]/.test("in 1992"));

console.log(/[0-9]/.test("in 1992"));

console.log(/\d/.test("in 1992"));

var dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("30-01-2003 15:20"));
// → true
console.log(dateTime.test("30-jan-2003 15:20"));
// → false

var dateTime = /\d\d\d\d-\d\d-\d\d \d\d:\d\d:\d\d/;
console.log(dateTime.test("2014-09-05 11:50:45"));

var notBinary = /[^01]/;
console.log(notBinary.test("1100100010100110"));
// → false
console.log(notBinary.test("1100100010200110"));
// → true

console.log(/'\d+'/.test("'123'"));
// → true
console.log(/'\d+'/.test("''"));
// → false
console.log(/'\d*'/.test("'123'"));
// → true
console.log(/'\d*'/.test("''"));
// → true

console.log(/\d+/.test("123"));
console.log(/\d+/.test("in the navy"));

var neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
// → true
console.log(neighbor.test("neighbor"));
// → true


var dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("30-1-2003 8:45"));
console.log(dateTime.test("30-1-2003 11:45"));


var date = /\d{4}-\d{1,2}-\d{1,2}/;
console.log(date.test("2014-9-5"));


var cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohooo"));
// → true



var match = /\d+/.exec("one two 100");
console.log(match);
// → ["100"]
console.log(match.index);
// → 8


var match_01 = /(\d+[ ])+/.exec("in the navy 200 4000 5");
console.log(match_01);
console.log(match_01.index);


console.log("in the navy".match(/\d+/));


var quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));
// → ["'hello'", "hello"]


console.log(new Date());

console.log(new Date(2009, 11, 9));
// → Wed Dec 09 2009 00:00:00 GMT+0100 (CET)
console.log(new Date(2009, 11, 9, 12, 59, 59, 999));
// → Wed Dec 09 2009 12:59:59 GMT+0100 (CET)


console.log((new Date(1957, 8, 29)).getTime());
console.log(new Date(-386798400000));

console.log(Date.now());

var string = "9-29-1957";
var dateTime = /(\d{1,2})-(\d{1,2})-(\d{4})/;
var match = dateTime.exec(string);

console.log(match);
console.log(match.length);

var animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pigs"));
// → true
console.log(animalCount.test("15 pigchickens"));
// → false

var animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pigs"));
console.log(animalCount.test("1 cow"));

console.log("mama".replace(/m/g, "p"));

console.log(
  "Hopper, Grace\nMcCarthy, John\nRitchie, Dennis"
    .replace(/([\w ]+), ([\w ]+)/g, "$2 $1"));
    
    
console.log(
    "De Ramos, Ferdinand Jason".replace(/([\w ]+), ([\w ]+)/g, "$2 $1"));

