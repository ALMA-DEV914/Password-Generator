// Assignment code here
var password = "";
var passwordLength = "";
var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghjiklmnopqrstuvwxyz0123456789@#$%&*";

 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    // alert the user to enter their password
  window.alert("Please generate your new password.");
  window.alert("Password should contain at least one of these criterias: upperCase, lowerCase, number and at least one special character.")

var promptConfirm = "";

  if (promptConfirm === ""){
    window.prompt("Would you like to add lowercase?");
  
    window.prompt("Would you like to add uppercase?");
  
    window.prompt("Would you like to add number?")
  
    window.prompt("Would you like to add a specialCharacter?");


  var promptPasswordLength =  window.prompt("Choose the length of your password between 8 and 128 characters.");
    
} else if (function passwordLength(min, max) {
      let passwordLength = 8 + "";
      if (passwordLength === 8 >= 128 ){
         return passwordLength();
      }
});
   else{
    generatePassword();
  }

  var promptPassword = window.prompt("Please key in your password");
  
 var password = generatePassword();
  
function generatePassword() {
    var password = "";
    var passwordLength = 24;
    var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghjiklmnopqrstuvwxyz0123456789@#$%&*";
for ( var i = 8; i < passwordLength; i++) {
  var randomPassword = Math.floor(Math.random() * charset.length);
  password += charset.substring(randomPassword,randomPassword + 1);
 }

var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





