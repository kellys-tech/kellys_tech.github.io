//create variables for each type of character allowed in password

var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var passArray = []
var newPass = []


// Assignment Code
var generateBtn = document.querySelector("#generate");

document.getElementById("generate").addEventListener("click", writePassword);



//function for the generate password 
function generatePassword (){ 
 
    var numChar = prompt ("How many characters would you like your password to be? Enter a number between 8 - 128.")
    numChar = parseInt(numChar)
      if (numChar>=8 && numChar<=128) {
      console.log (numChar);
      }
      else {
        alert ("Enter a number between 8 and 128. Please try again.");
      return;
    }

    var confirmSpecial = confirm("Would you like your password to contain special characters?");
    console.log (confirmSpecial);

      if (confirmSpecial){
      passArray = passArray.concat(special);
      console.log(passArray)
    }
    var confirmLower = confirm("Would you like your passsword to contain lowercase characters?");
    console.log (confirmLower);

      if (confirmLower){
      passArray = passArray.concat(lowercase);
      console.log(passArray)
    }
    var confirmUpper = confirm("Would you like you passsword to contain uppercase characters?");
    console.log (confirmUpper)

      if (confirmUpper){
      passArray = passArray.concat(uppercase);
      console.log(passArray)
    }
    var confirmNum = confirm("Would you like your password to contain numbers?");
    console.log (confirmNum)
    
      if (confirmNum){
      passArray = passArray.concat(numbers);
      console.log(passArray)
    }
    
      if (!special && !lowercase && !uppercase && !numbers) {
      console.log ("the user chose no character options")
      alert ("You must choose at least one character option. Please try again.");
      return;
    }

    var password = [];
    for (i = 0; i < numChar; i++) {
      password.push(passArray[Math.floor(Math.random() * passArray.length)]);
      console.log (password)
    }
    return password.join("");
  }

   // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;    
  }
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);