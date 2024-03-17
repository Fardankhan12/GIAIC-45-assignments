// Shrinking Guest List
let dinnerGuests: string[] = ['martin ', 'fardan','sergio Marquina','shayan','rumaisa','Elicia Ciera']

console.log("Sorry, we can only invite two guests for dinner.");

while (dinnerGuests.length > 2) {
    let removedGuest = dinnerGuests.pop();
    console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}

for (let remainingGuest of dinnerGuests) {
    console.log(`Dear ${remainingGuest}, you are still invited to dinner.`);
}

dinnerGuests = [];
console.log(dinnerGuests);
