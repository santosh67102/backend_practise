var catme = require('cat-me');
var jokes = require('knock-knock-jokes');
var faker = require('faker');
console.log("******************************************************************************************");
console.log(catme());

console.log("******************************************************************************************");
console.log(faker.address.streetName());
console.log(faker.name.lastName());
console.log("******************************************************************************************");

console.log(jokes());
console.log("******************************************************************************************");
console.log("printed in the git log");
