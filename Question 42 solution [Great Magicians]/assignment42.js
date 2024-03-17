"use strict";
// Define an array of magician names
let magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Function to add "the Great" to each magician's name
function make_great(names) {
    for (let i = 0; i < names.length; i++) {
        names[i] = "the Great " + names[i];
    }
}
// Function to show magician names
function show_magicians(names) {
    for (let name of names) {
        console.log(name);
    }
}
// Call make_great function to modify magician names
make_great(magicians);
// Call show_magicians function to see the modified list
show_magicians(magicians);
