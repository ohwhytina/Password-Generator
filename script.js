// Assignment code here
var lowerCase = 'abcdefghijklmnopqrstuvwyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numberChar = '0123456789';
var symbolChar = '~!@#$%^&*()_+';

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var length = window.prompt("How many characters would you like your password to contain?");
    var includesymboleChar = confirm("Click OK to confirm including special.");
    var includenumberChar = confirm("Click OK to confirm including numeric characters.");
    var includelowerCase = confirm("Click OK to confirm including lowercase characters.");
    var includeupperCase = confirm("Click OK to confirm including uppercase characters.");
    return;

   var password = {
      length: length,
      symbolChar: includesymboleChar,
      numberChar: includenumberChar,
      lowerCase: includelowerCase,
      upperCase = includeupperCase
   }
  };
  

  
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

