// Assignment code here
// Declare the global variables and the values on the array
// Empty array of the password length for the user to choose their length
var requiredLength = [];
// assign variables value for the upper case characters
var upperCaseChar = ["Q","W","E","R","T","Y","U","I","O","P","L","K","J","H","G","F","D","S","A","Z","X","C","V","B","N","M"];
// assign variables value for the lower case
var lowerCaseChar = ["q","w","e","r","y","u","i","o","p","l","k","j","h","g","f","d","s","a","z","x","c","v","b","n","m"];
// assign variables value for the symbols characters
var symbolsChar = ["!","#","$","%","&","(",")","*","+",",","-",".","/",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
// assign variables value for the numbers characters
var numbersChar = ["1","2","3","4","5","6","7","8","9","0"];
// create randomNumber() function for the length of the password
var randomNumber = function () {
  var item = requiredLength[Math.floor(Math.random() *  requiredLength.length)]
  ;
  return item;
};

// create passwordLength() function and conditional statements for the password requirements
var passwordLength = function(){
  // prompt input for the length value
  var length = window.prompt("Choose password length between 8 to 128 characters. Enter the number.");

  // if length is less than 8 characters alert the user for the minimum length
 if (length < 8 ){
    window.alert("Password length should have a minimum of 8 characters");
     passwordLength();
  }
  // if password length is more than 128 characters alert the user for the maximum length
  else if(length > 128 ){
    window.alert("Password length should not exceed to 128 characters");
    passwordLength();
  }
  // return the input length
  else  {
    return length;
  }
};
// create upperCase() function
var upperCase = function(){
  // confirm user if they want to add upper case characters in their password
   var upperConfirm = window.confirm("Would you like to include upper case characters?");
   // if confirm, add the upper case to the required length
    if(upperConfirm) {
      requiredLength = requiredLength.concat(upperCaseChar);
    }
  };
// create lowerCase() function
var lowerCase = function() {
  // confirm user if they want to add lower case in their pssword
  var lowerConfirm = window.confirm("Would you like to include lower case characters?");
  // if confirm, add lower case to the required length
  if(lowerConfirm){
     requiredLength = requiredLength.concat(lowerCaseChar) ;
  }
};
// create symbolChar() function
var symbolChar = function() {
  // confirm user if they want to add symbols in their password
  var symbolConfirm = window.confirm("Would you like to include symbol characters?");
  // if confirm, add symbols to the required length
  if (symbolConfirm) {
    requiredLength = requiredLength.concat(symbolsChar);
  }
};
// create numberChar() function
var numberChar = function(){
  // confirm user if they to add numbers in their password
  var numberConfirm = window.confirm("Would you like to include numbers?");
  // if confirm add numbers to the required length
  if (numberConfirm) {
    // add number
    requiredLength = requiredLength.concat(numbersChar);
    // if user didn't confirm a single character criteria alert them to choose by returning the confirm functions
  } else {
    window.alert("You should choose at least one character from the criterias");
    return lowerCase(), upperCase(), symbolChar(), numberChar();
    
  }
};

// create the generatePassword() function
var generatePassword = function(){
  // add all created functions with conditinal statements
var length = passwordLength();
  upperCase();
  lowerCase();
  symbolChar();
  numberChar();
  // console log the input length 
  console.log(requiredLength);
  console.log(length);
  var password = "";
  // create a for loops for the password
  for (let i = 0; i < length; i++) {
    password += randomNumber();
    console.log(password);
  }
  // return the generated password
  return password;
};

//Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  requiredLength = [];
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
