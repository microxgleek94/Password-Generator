// Assignment Code
  var generateBtn = document.querySelector("#generate");


//User will select the length of their password
// while loop is used to make sure the user picks a # between 8 and 128
// if the user does not choose a valid #, a prompt will appear to make sure they do
    var length = prompt("Your passwords must be between 8 and 128 characters. Please enter a number between 8 and 128.");
      while (length < 8  || length > 128 || isNaN(length)) {
    var length = prompt("You did not choose a valid number. Please enter a number between 8 and 128.");
}
    // checks user length input
    console.log(`User length input: ${length}`);
    
// Below prompts are used to confirm which characters the user wants to use in password 
var userNumber = confirm("Do you want to include numbers?");
var userSpecial = confirm("Do you want to include special characters?");
var userLower = confirm("Do you want to include lowercase characters?");
var userUpper = confirm("Do you want to include uppercase characters?");

  //checks user input
  console.log(`userNum input: ${userNumber}`);
  console.log(`userSpecial input: ${userSpecial}`);
  console.log(`userLower input:${userLower}`);
  console.log(`userUpper input ${userUpper}`);



//This calls the generatePassword function
var password = generatePassword();



// This function will create a random password based on user input
function generatePassword() {

 // defining the variables that will create the random password
var passwordLen = "0";

var numbers = "0123456789"; 
var specials = "@!#$%^&*()_+"; 
var lowers = "abcdefghijklmnopqrstuvwxyz"; 
var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
var randomPasswordLen = "";

  //checks variables
  console.log(`Password length: ${passwordLen}`);
  console.log(`Numbers: ${numbers}`);
  console.log(`Special: ${specials}`);
  console.log(`Lowers: ${lowers}`);
  console.log(`Uppers: ${uppers}`);
  console.log(`RandomLen: ${randomPasswordLen}`);


for (var i = 0; i < length; i++ ) {
    randomPasswordLen += randomPasswordLen.charAt(Math.floor(Math.random() * randomPasswordLen));
    console.log(passwordLen);
  }


if (userNumber === true) {
  // add numbers to password
}
if (userSpecial === true) {
  // add special characters to password
}
if (userLower === true) {
  // add lowercase characters to password
}
if (userUpper === true) {
  // add uppercase letters to password
}
else {
  alert("You need to pick at least one character type.");
}

  return randomPasswordLen;

} // this is the end of the generatePassword function


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//this prints password in "textarea" box, as per HTML file
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
 