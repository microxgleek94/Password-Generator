// Assignment Code
var generateBtn = document.querySelector("#generate");


//User will select the length of their password
// while loop is used to make sure the user picks a # between 8 and 128
var length = prompt("Your passwords must be between 8 and 128 characters. Please enter a number between 8 and 128.");
while (length < 8  || length > 128){
  var length = prompt("Please enter a number between 8 and 128.");
}

// Below prompts are used to confirm which chracters the user wants to use in password 
var numberChar = confirm("Do you want to include numbers?");
var specialChar = confirm("Do you want to include special characters?");
var lowerCase = confirm("Do you want to include special characters?")
var upperCase = confirm("Do you want to include Upper Case characters?");

// Write password to the #password input
// how do I use these variables?
function writePassword() {
  var password = generatePassword();

//this prints password in "textarea" box, as per HTML file
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

// variables for characters to be used in password
var numbers = "0123456789"; 
var specials = "@!#$%^&*()_+"; 
var lowers = "abcdefghijklmnopqrstuvwxyz"; 
var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 

// need to write if/else statement to store user response if true/false
// how to combine variables randomly?






}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 