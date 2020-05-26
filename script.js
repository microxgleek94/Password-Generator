// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {

  //User will select the length of their password
  // while loop is used to make sure the user picks a # between 8 and 128
  // if the user does not choose a valid #, a prompt will appear to make sure they do
  var length = prompt("Your passwords must be between 8 and 128 characters. Please enter a number between 8 and 128.");
  while (length < 8 || length > 128 || isNaN(length)) {
    alert("You did not choose a valid number. Please enter a number between 8 and 128.");
    var length = prompt("Your passwords must be between 8 and 128 characters. Please enter a number between 8 and 128.");

    // checks user length input
    console.log(`User length input: ${length}`);
  }

  // Below prompts are used to confirm which characters the user wants to use in password 
  var userNumber = confirm("Do you want to include numbers?");
  var userSpecial = confirm("Do you want to include special characters?");
  var userLower = confirm("Do you want to include lowercase characters?");
  var userUpper = confirm("Do you want to include uppercase characters?");

  //checks user input true/false
  console.log(`userNum input: ${userNumber}`);
  console.log(`userSpecial input: ${userSpecial}`);
  console.log(`userLower input:${userLower}`);
  console.log(`userUpper input ${userUpper}`);

  while (userLower === false && userNumber === false && userSpecial === false && userNumber === false) {
    alert("You need to pick at least one character type.");
    var userNumber = confirm("Do you want to include numbers?");
    var userSpecial = confirm("Do you want to include special characters?");
    var userLower = confirm("Do you want to include lowercase characters?");
    var userUpper = confirm("Do you want to include uppercase characters?");
  }


  //This calls the generatePassword function
  var password = generatePassword();

  //this prints password in "textarea" box, as per HTML file
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  // This function will create a random password based on user input
  function generatePassword() {

    // defining the variables that will create the random password
    var numbers = "0123456789";
    var specials = "@!#$%^&*()_+";
    var lowers = "abcdefghijklmnopqrstuvwxyz";
    var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var randomPasswordLen = "";
    var password = "";

    //checks variables
    console.log(`Numbers: ${numbers}`);
    console.log(`Special: ${specials}`);
    console.log(`Lowers: ${lowers}`);
    console.log(`Uppers: ${uppers}`);

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

    console.log(`Random string generated based off of user input: ${randomPasswordLen}`);

    // for loop is used to pull a character out of the string
    // built from the user's input
    for (var i = 0; i < length; i++) {

      var ranPassword = Math.floor(Math.random() * randomPasswordLen.length);

      var newPassword = randomPasswordLen.charAt(ranPassword);

      //this will show the characters included in the random password
      // console.log(`This chracter will be included in the user's password: ${newPassword}`);

      password += newPassword;

      //this prints the randomly generated password that will show on the screen for the user
      console.log("---------");
      console.log(`This is the user's randomly generated password: ${password}`);

      // the random characters chosen are added to an empty string
      // and returned to be posted to textarea
    }
    return password;
  } // this is the end of the generatePassword function
} // this is the end of the eritePassword function
