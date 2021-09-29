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

 // ask user to confirm if they leave the prompt empty
 if (promptConfirm === "") {
   // alert user to confirm Yes or No
  window.alert("Cannot be empty, please answer YES or NO to confirm");
  // ask user if they'd like to add the criteria's for password again
  var promptConfirm = window.prompt("Would you like to add  'lowerCase', 'upperCase', 'number', 'specialCharacter' in your password? Answer YES or NO");
  // if user confirm, ask to choose the criteria
} else {
  window.prompt("Choose from the following: 'lowerCase', 'upperCase', 'number', 'specialCharacter'.");
}
// ask user to choose if they confirm YES
if (promptConfirm === "YES") {
  window.alert("Choose from the following: 'lowerCase', 'upperCase', 'number', 'specialCharacter'.");
// ask user to choose the criteria they'd like to add
  var promptConfirm = window.prompt("Choose: 'lowerCase', 'upperCase', 'number', 'specialCharacter'.");
  // alert them about the password length
 var passwordLength = window.prompt("The password length should be minimum of 8 character and not more than 128 character", randomNumber);
// if user confirm NO(false)
} else if (promptConfirm === "NO") {
  // alert user to force them to choose at least one criteria
    window.alert("You have to choose at least one criteria. Try again");
    // prompt the criteria again for them to choose from
   var promptConfirm = window.prompt("Choose: 'lowerCase', 'upperCase', 'number', 'specialCharacter'.");
   // 
   var passwordLength = (8, 128);
   var passwordLength = window.prompt("The password length should be minimum of 8 character and not more than 128 character");
   // alert the password
} else {
    generatePassword();
}

// asign password to generatePassword() function
 var password = generatePassword();
     
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
