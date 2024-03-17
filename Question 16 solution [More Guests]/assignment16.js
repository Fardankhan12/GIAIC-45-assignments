"use strict";
// More Guests
let dinnerGuests = ["fardan", "shayan", "rumaisa"];
// Add a print statement to the end of your program informing people that you found a bigger dinner table
console.log("Good news! We found a bigger dinner table!");
// Add one new guest to the beginning of your array
dinnerGuests.unshift("martin ");
// Add one new guest to the middle of your array
dinnerGuests.splice(2, 0, "sergio Marquina");
// Use append() to add one new guest to the end of your list
dinnerGuests.push("Elicia Ciera");
// Print a new set of invitation messages, one for each person in your list
for (let guest of dinnerGuests) {
    console.log(`Dear ${guest}, I would like to invite you to dinner.`);
}
console.log(dinnerGuests);
