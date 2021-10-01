// Assignment code here
var password = "";
var charset = 
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghjiklmnopqrstuvwxyz0123456789@#$%&*";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
    window.alert("Please generate your new password");
    window.alert("Your password should contain one of these criterias: 'lower case', 'upper case', 'number', and 'special character'.");
  var promptCriteria = window.prompt("Choose which criteria you want to include: 'lower case', upper case',' number', or 'special charcter'.");

  var promptConfirm = "";
  if (promptConfirm === "") {
    var passwordLength = window.prompt("Choose the length of your password between 8 to 128 characters");

      var promptConfirm = window.prompt("Would you like to add lower case in your password?");
    
     var promptConfirm = window.prompt("Would you like to add upper case in your password?");
    
      var promptConfirmn = window.prompt("Would you like to add number in your password?");
    
      var promptConfirmn = window.prompt(" Would you like to add special character in your password?");
  
      var printPassword = window.prompt("Please key in your password.");
  } else {
    writePassword();
  }
 
  var password = generatePassword();
    
  function generatePassword(){
    var password = "";
    var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghjiklmnopqrstuvwxyz0123456789@#$%&*";
    for ( var i = 0; i < passwordLength; i++) {
     var randomPassword = Math.floor(Math.random() * charset.length);
     password += charset.substring(randomPassword, randomPassword + 1);
    }
 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





