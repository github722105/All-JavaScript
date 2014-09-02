// Sample JS programs using loop implementations.

// while loop.
var i = 1;
while (i < 10) {
    console.log("Iteration " + i);
    i++;
}

// do-while loop.
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var i = 0;
do {
    console.log( days[i++] );
} while (i < days.length);

// for loop.
for (var x = 1; x <= 9; x++) {
    for (var y = 1; y <= 9; y++) {
        console.log(x + " X " + y + " = " + (x * y));
    }
}

// for-in loop.
var months = ["January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"];
for (var idx in months) {
    console.log("It's the month of " + months[idx] + "!");
}
