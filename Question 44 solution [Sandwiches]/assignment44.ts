function makeSandwich(...items: string[]){
    console.log("Making a sandwich with the following items:");
    for (const item of items) {
        console.log(`- ${item}`);
    }
    console.log("Enjoy your sandwich!");
}

// Call the function three times with different numbers of arguments
console.log("Sandwich 1:");
makeSandwich("ketchup", "Cheese", "Lettuce", "Tomato");

console.log("\nSandwich 2:");
makeSandwich("cucumber", " Cheese", "Mustard");

console.log("\nSandwich 3:");
makeSandwich("nutella","Jelly","sugar syrup");
