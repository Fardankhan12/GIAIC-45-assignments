// Start with your program from Exercise 14
let guests = ["aleem", "shayan", "professor"];
let GuessWhoCantmakeit = guests[1]
// Add a print statement at the end of your program stating the name of the guest who can’t make it
console.log("Unfortunately, shayan can't make it.");

// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting
guests[1] = "anibelcortes";

// Print a second set of invitation messages, one for each person who is still in your list
for (let guest of guests) {
    console.log(`Dear ${guest}, I would like to invite you to dinner.`);
}
