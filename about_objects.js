// About objects.

var rabbit = {};

rabbit.speak = function(line) {
    console.log("The rabbit says '" + line + "'");
};
rabbit.speak("I'm alive.");

// Special variable this.
function speak(line) {
    console.log("The " + this.type + " rabbit says '" + line + "'");
}

var whiteRabbit = {type: "white", speak: speak};
var fatRabbit = {type: "fat", speak: speak};

whiteRabbit.speak("Oh my ears and whiskers, how late it's getting!");
fatRabbit.speak("I could sure use a carrot right now.");

speak.apply(fatRabbit, ["Burp!"]);
speak.call({type: "old"}, "私は日本語を話すことができます。");

var empty = {};
console.log(empty.toString);
console.log(empty.toString());

// Creating an object with specific prototype.
var protoRabbit = {
  speak: function(line) {
      console.log("The " + this.type + " rabbit says '" + line + "'");
  }
};

var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");

// Object constructor.

function Rabbit(type) {
    this.type = type;
}

var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");

console.log(blackRabbit.type);

Rabbit.prototype.speak = function(line) {
                             console.log("The " + this.type + " rabbit says '" + line + "'");
                         };
blackRabbit.speak("Doom...");

// Overriding an object's derived properties.

Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);

console.log([1, 2].toString());
console.log(([1, 2].toString()).length);

