// array in parameters
var symbolcharInfo = ['!@#$%^&*()_+'];
var numbercharInfo = ["0123456789"];
var lowercaseInfo = ['abcdefghijklmopqrstuvwxyz'];
var uppercaseInfo = ['ABCDEFGHIJKLMNOPQRSTUVWYZ'];
var Length = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
    //pop up to enter length
    var includeLength = window.prompt("How many characters would you like your password to contain?");
    //must be between 8-128 characters and a number
    while(includeLength <= 7 || includeLength >= 129 || isNaN(includeLength)) {
      window.alert("Invaild Input. Password length must be between 8 to 128 characters. Please enter numbers only.");
        //try again
        var includeLength = window.prompt("How many characters would you like your password to contain?");
    }; 
    //add symbol characters
    var includesymboleChar = window.confirm("Click OK to confirm including special characters.");
    //add numberic characters
    var includenumberChar = window.confirm("Click OK to confirm including numeric characters.");
    //add lowercase characterss
    var includelowerCase = window.confirm("Click OK to confirm including lowercase characters.");
    //add uppercase characters
    var includeupperCase = window.confirm("Click OK to confirm including uppercase characters.");
    //if not chosen, don't add parameter
    while(
      includesymboleChar ===false 
      && includenumberChar === false
      && includelowerCase === false 
      && includeupperCase === false)
      {
      //must include 1 parameter
      window.alert("You must choose at least one parameter");
        //try again, chosen at least 1
        var includesymboleChar = window.confirm("Click OK to confirm including special characters.");
        var includenumberChar = window.confirm("Click OK to confirm including numeric characters.");
        var includelowerCase = window.confirm("Click OK to confirm including lowercase characters.");
        var includeupperCase = window.confirm("Click OK to confirm including uppercase characters.");
    }
    
   //combine chosen parmeter(s)
    var passwordOption = []
    if (includesymboleChar) {
      passwordOption = passwordOption + symbolcharInfo
    }
    if (includenumberChar) {
      passwordOption = passwordOption + numbercharInfo
    }
    if (includelowerCase) {
      passwordOption = passwordOption + lowercaseInfo
    }
    if (includeupperCase) {
      passwordOption = passwordOption + uppercaseInfo
    }
    //show parameters combination in console
    console.log(passwordOption);
    
     // randomize parameter with length entered
     var randomPassword = "";
     
     for (let i = 0; i < includeLength; i++) {
          randomPassword = randomPassword + passwordOption[Math.floor(Math.random() * passwordOption.length)];
          //display random password combination in console per length ented
          console.log(randomPassword);
     }
     return randomPassword;
   };
   
   //display password in box
    function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

  };

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


