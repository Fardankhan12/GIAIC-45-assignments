function makeGreat(magicians: string[]) {
    // Create a new array to store the great magicians
    const greatMagicians: string[] = [];

    // Loop through the original array and add "the Great" to each magician's name
    for (const magician of magicians) {
        const greatMagician = ` the Great ${magician}` ;
        greatMagicians.push(greatMagician);
    }

    // Return the array of great magicians
    return greatMagicians;
}

function showMagicians(magicians: string[]){
    // Display the list of magicians
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Original list of magicians
const magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Making a copy of the original list
const originalMagicians: string[] = [...magicians];

// Calling makeGreat() with the copied array
const greatMagicians: string[] = makeGreat(originalMagicians);

// Displaying both arrays
console.log("Original Magicians:");
showMagicians(originalMagicians);

console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
