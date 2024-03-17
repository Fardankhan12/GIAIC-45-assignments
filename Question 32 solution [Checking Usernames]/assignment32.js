"use strict";
let currentUsers = ["Fatima", "Rumaisa", "saim", "umer", "Admin"];
let newUsers = ["fatIma", "yawar", "admin", "uzair"];
for (let i = 0; i < newUsers.length; i++) {
    let updatedUser = newUsers[i];
    let userExists = false;
    for (let j = 0; j < currentUsers.length; j++) {
        let updatedCurrentUser = currentUsers[j];
        if (updatedUser.toLowerCase() === updatedCurrentUser.toLowerCase()) {
            userExists = true;
            break; // No need to check further, username exists
        }
    }
    if (userExists) {
        console.log(`${updatedUser}, this username isn't exist`);
    }
    else {
        console.log(`${updatedUser} username is available`);
    }
}
