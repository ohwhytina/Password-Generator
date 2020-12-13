// array in parameters
var symbolcharInfo = ['~','!','@','#','%','^','&','*','(',')','_','+'];
var numbercharInfo = ["0123456789"];
var lowercaseInfo = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseInfo = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var Length = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    //pop up to enter length
    var includeLength = window.prompt("How many characters would you like your password to contain?");
    //must be between 8-128 characters, loop if enter outside of 8-128
    while(includeLength <=8 && includeLength >= 128) {
      window.alert("Password length must be between 8 to 128 characters.");
      //try again
      var includeLength = window.prompt("How many characters would you like your password to contain?");
    }
    //add symbol characters
    var includesymboleChar = window.confirm("Click OK to confirm including special characters.");
    //add numberic characters
    var includenumberChar = window.confirm("Click OK to confirm including numeric characters.");
    //add lowercase characters
    var includelowerCase = window.confirm("Click OK to confirm including lowercase characters.");
    //add uppercase characters
    var includeupperCase = window.confirm("Click OK to confirm including uppercase characters.");
    //if not chosen, don't add parater
    while(
      includesymboleChar ===false 
      && includenumberChar === false
      && includelowerCase === false 
      && includeupperCase === false)
      {
      //must include 1 parameter
      window.alert("You must choose at least one parameter");
      //try again, chosen at least 1
    var includesymboleChar = window.confirm("Click OK to confirm including special.");
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
     
     for (let i = 0; i < includeLength; ++i) {
          randomPassword = randomPassword + passwordOption[Math.floor(Math.random() * passwordOption.length)];
          //display random password combination in console per length ented
          console.log(randomPassword);
     }
     return randomPassword;
   };
   
   //display password in box
    function generatePassword() {
    var password = writePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

  };

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


