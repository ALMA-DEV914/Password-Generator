// Assignment code here
var password = "";
var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghjiklmnopqrstuvwxyz0123456789@#$%&*";
var passwordLength = 14;
 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // alert the user to enter their password
  window.alert("Please generate your new password.");
  // alert user the criteria of the password
  window.alert("Password should contain upperCase, lowerCase, number and at least one special character.")
 // ask the user if they'd like to add one of the criteria
 var promptConfirm = window.prompt("Would you like to add  'lowerCase', 'upperCase', 'number', 'specialCharacter' in your password? Answer YES or NO");
  
 var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
