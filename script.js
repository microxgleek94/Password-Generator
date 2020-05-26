// Assignment Code
  var generateBtn = document.querySelector("#generate");

// Write password to the #password input
  function writePassword() {

//User will select the length of their password
// while loop is used to make sure the user picks a # between 8 and 128
// if the user does not choose a valid #, a prompt will appear to make sure they do
    var length = prompt("Your passwords must be between 8 and 128 characters. Please enter a number between 8 and 128.");
      while (length < 8  || length > 128 || isNaN(length)) {
    var length = prompt("You did not choose a valid number. Please enter a number between 8 and 128.");
}
    // checks user length input
    console.log(`User length input: ${length}`);
}

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
var numbers = "0123456789"; 
var specials = "@!#$%^&*()_+"; 
var lowers = "abcdefghijklmnopqrstuvwxyz"; 
var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
var randomPasswordLen = "";
var password="";

  //checks variables
  console.log(`Password length: ${passwordLen}`);
  console.log(`Numbers: ${numbers}`);
  console.log(`Special: ${specials}`);
  console.log(`Lowers: ${lowers}`);
  console.log(`Uppers: ${uppers}`);
  console.log(`RandomLen: ${randomPasswordLen}`);

  // if the user's input is true, that value will be added to
//var randomPasswordLen empty string;
if (userNumber === true) {
  randomPasswordLen = randomPasswordLen.concat(numbers);
}
if (userSpecial === true) {
  randomPasswordLen = randomPasswordLen.concat(specials);
}
if (userLower === true) {
  randomPasswordLen = randomPasswordLen.concat(lowers);
}
if (userUpper === true) {
  randomPasswordLen = randomPasswordLen.concat(uppers);
}
else {
  alert("You need to pick at least one character type.");
}

// checks to see random characters chosen
console.log("---------");
console.log(`Random Numbers: ${randomPasswordLen.concat(numbers)}`);
console.log("---------");
console.log(`Random Specials: ${randomPasswordLen.concat(specials)}`);
console.log("---------");
console.log(`Random Lowers: ${randomPasswordLen.concat(lowers)}`);
console.log("---------");
console.log(`Random Uppers: ${randomPasswordLen.concat(uppers)}`);



// for loop is used to pull a character out of the string
// built from the user's input
for (var i = 0; i < randomPasswordLen.length; i++) {
    randomPasswordLen = randomPasswordLen.charAt(Math.floor(Math.random() * randomPasswordLen));
   
    // the random characters chosen are added to an empty string
    // and returned to be posted to textarea
    randomPasswordLen+= password
    console.log(password);
  }
  return password

} // this is the end of the generatePassword function



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//this prints password in "textarea" box, as per HTML file
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
 