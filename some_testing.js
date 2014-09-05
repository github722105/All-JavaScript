// Some testing.

function Vector(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.plus = function(other) {
    return new Vector(this.x + other.x, this.y + other.y);
}

function testVector() {
    var p1 = new Vector(10, 20);
    var p2 = new Vector(-10, 5);
    var p3 = p1.plus(p2);
    
    if (p1.x !== 10) return "fail: p1.x property";
    if (p1.y !== 20) return "fail: p1.y property";
    if (p2.x !== -10) return "fail: p2.x property";
    if (p2.y !== 5) return "fail: p2.y property";
    if (p3.x !== 0) return "fail: p3.x property from plus";
    if (p3.y !== 25) return "fail: p3.y property from plus";  
    return "everything okay";
}

console.log(testVector());

// Assertion

function AssertionFailed(message) {
    this.message = message;
}
AssertionFailed.prototype = Object.create(Error.prototype);

function assert(test, message) {
    if (!test) {
        throw new AssertionFailed(message);
    }
}

function lastElement(array) {
    assert(array.length > 0, "empty array in lastElement");
    return array[array.length - 1];
}


console.log(lastElement([1, 2, 3, 4, 5,]));
console.log(lastElement([""]));             

var box = {
  locked: true,
  unlock: function() { this.locked = false; },
  lock: function() { this.locked = true; },
  _content: [],
  get content() {
      if (this.locked) throw new Error("Locked!");
      return this._content;
  }
};

function withBoxUnlocked(body) {
  var locked = box.locked;
  if (!locked)
    return body();

  box.unlock();
  try {
    return body();
  } finally {
    box.lock();
  }
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}

console.log(box.locked);