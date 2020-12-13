// Assignment code here
var lowercaseInfo = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseInfo = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbercharInfo = [0,1,2,3,4,5,6,7,8,9];
var symbolcharInfo = ['~','!','@','#','%','^','&','*','(',')','_','+'];
var includeLength = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var includeLength = window.prompt("How many characters would you like your password to contain?");
    while(includeLength <=8 || includeLength >= 128){
      window.alert("Password length must be between 8 to 128 characters.");
      var includeLength = window.prompt("How many characters would you like your password to contain?");
    }

    var includesymboleChar = window.confirm("Click OK to confirm including special.");
    var includenumberChar = window.confirm("Click OK to confirm including numeric characters.");
    var includelowerCase = window.confirm("Click OK to confirm including lowercase characters.");
    var includeupperCase = window.confirm("Click OK to confirm including uppercase characters.");
    while(includesymboleChar ===false && includenumberChar === false&& includelowerCase === false && includeupperCase === false){
      alert("You must choose at least one parameter");
    var includesymboleChar = window.confirm("Click OK to confirm including special.");
    var includenumberChar = window.confirm("Click OK to confirm including numeric characters.");
    var includelowerCase = window.confirm("Click OK to confirm including lowercase characters.");
    var includeupperCase = window.confirm("Click OK to confirm including uppercase characters.");
    }
   
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  };

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


