/*
 Julia Keith
 8/12/15
 Expressions Assignment
 */

// Variables
var yourFirstName;
var yourLastName;
var yourAge;
var petAge;

//prompts
yourFirstName = prompt("What is your first name?");
yourLastName = prompt("What is your last name?");
yourAge = prompt("What is your age?");
anyPets = prompt ("Do you have any pets?");
petAge = prompt ("What is your pets age?");
petAge = Number(petAge);
yourAge = Number(yourAge);

// outputs
console.log(" Hi, " + yourFirstName + " " + yourLastName + "." );
console.log("You will be" + " " + (yourAge + 5) + " " +  "years old in five years.");
console.log("Your age times five will be" + " " + (yourAge * 5));