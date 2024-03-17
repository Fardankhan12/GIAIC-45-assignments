"use strict";
function makeGreat(magicians) {
    // Create a new array to store the great magicians
    const greatMagicians = [];
    // Loop through the original array and add "the Great" to each magician's name
    for (const magician of magicians) {
        const greatMagician = ` the Great ${magician}`;
        greatMagicians.push(greatMagician);
    }
    // Return the array of great magicians
    return greatMagicians;
}
function showMagicians(magicians) {
    // Display the list of magicians
    for (const magician of magicians) {
        console.log(magician);
    }
}
// Original list of magicians
const magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Making a copy of the original list
const originalMagicians = [...magicians];
// Calling makeGreat() with the copied array
const greatMagicians = makeGreat(originalMagicians);
// Displaying both arrays
console.log("Original Magicians:");
showMagicians(originalMagicians);
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
