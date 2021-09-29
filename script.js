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
    var promptConfirm = window.prompt("Choose from the following: 'lowerCase', 'upperCase', 'number', 'specialCharacter'.");
    var promptConfirm = window.prompt("The password length should be minimum of 8 character and not more than 128 character. Enter your password length.");
  } else if (promptConfirm === "YES") {

    var promptConfirm = window.prompt("Choose from the following: 'lowerCase', 'upperCase', 'number', 'specialCharacter'.");
 
     window.prompt("The password length should be minimum of 8 character and not more than 128 character. Enter the length of your password");

   var password = window.prompt("Please key in your password.");
   generatePassword(randomNumber);

 } else if (promptConfirm === "NO") {
      window.alert("You have to choose at least one criteria. Try again");

     var promptConfirm = window.prompt("Choose: 'lowerCase', 'upperCase', 'number', 'specialCharacter'.");

      window.prompt("The password length should be minimum of 8 character and not more than 128 character");
  } else {
      window.prompt("The password length should be minimum of 8 character and not more than 128 character");
  }
var password = window.prompt("Please key in your password.", randomNumber);
// asign password to generatePassword() function
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
