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
  window.alert("Password should contain upperCase, lowerCase, number and at least one special character.")

  var promptConfirm = window.prompt("Would you like to add  'lowerCase', 'upperCase', 'number', 'specialCharacter' in your password? Answer YES or NO");
  
  if (promptConfirm === "") {
    window.alert("Cannot be empty, please answer YES or NO to confirm");
    var promptConfirm = window.prompt("Would you like to add  'lowerCase', 'upperCase', 'number', 'specialCharacter' in your password? Answer YES or NO");
     window.prompt("Choose from the following: 'lowerCase', 'upperCase', 'number', 'specialCharacter'.");

  } else if (promptConfirm === "YES") {
    window.prompt("Choose from the following: 'lowerCase', 'upperCase', 'number', 'specialCharacter'.");

  } else if (promptConfirm === "NO") {
      window.alert("You have to choose at least one criteria. Try again");
     var promptConfirm = window.prompt("Choose: 'lowerCase', 'upperCase', 'number', 'specialCharacter'.");

  } else {
    password();
  }
   var passwordLength = window.prompt("The password length should be minimum of 8 character and not more than 128 character. Please enter your password length.");

  var promptConfirm = window.prompt("Please key in your password");
   var password = generatePassword();
  
  function generatePassword() {
    var password = "";
    var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghjiklmnopqrstuvwxyz0123456789@#$%&*";
    var passwordLength = 14;
for ( var i = 0; i < passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * charset.length);
  password += charset.substring(randomNumber, randomNumber + 1);
   }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





