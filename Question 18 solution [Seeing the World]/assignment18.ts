// Seeing the World
let placesToVisit: string[] = ["Paris", "Tokyo", "Rio de Janeiro", "Istanbul", "Sydney"];

console.log("Original order:");
console.log(placesToVisit);

console.log("Alphabetical order:");
console.log(...placesToVisit.sort());

console.log("Original order:");
console.log(placesToVisit);

console.log("Reverse alphabetical order:");
console.log(...placesToVisit.sort().reverse());

console.log("Original order:");
console.log(placesToVisit);

placesToVisit.reverse();
console.log("Reversed order:");
console.log(placesToVisit);

placesToVisit.reverse();
console.log("Original order again:");
console.log(placesToVisit);

console.log("Sorted in alphabetical order:");
console.log(placesToVisit.sort());

console.log("Sorted in reverse alphabetical order:");
console.log(placesToVisit.sort().reverse());
