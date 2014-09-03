// simple_interval.js

var x = 0, y = 0, z = 0;

function displayValues() {
    console.log("X = %d; Y = %d; Z = %d", x, y, z);
}

function upDateX() {
    x += 1;
}

function upDateY() {
    y += 1;
}

function upDateZ() {
    z += 1;
    displayValues();
}

setInterval(upDateX, 500);
setInterval(upDateY, 1000);
setInterval(upDateZ, 2000);
