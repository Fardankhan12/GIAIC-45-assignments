"use strict";
// Stripping Names
let $name = " \n \t \t fardan \n \t ";
// printing the name with spaces
console.log(`name with space [${$name}]`);
// to remove wide space i use the method trim()
let updatedName = $name.trim();
// printing the name without spaces
console.log(` name without space ${updatedName}`);
