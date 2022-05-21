// Assignment code here
var characterLength = window.prompt("How many characters would you like?");
  if (characterLength>= 8 && characterLength<= 128) {
    console.log(characterLength);
    window.alert("You have selected " + characterLength + "!");
  } else if (characterLength< 8 || characterLength> 128) {
    window.alert("Try Again!");
  }

var uppercase = window.confirm("Would you like to include UPPERCASE letters?");
  console.log(uppercase);
  if (uppercase) {
    window.alert("It appears you desire uppercase letters in your password.");
  } else {
    window.alert("It appears you loathe uppercase letters. You have been relegated to lowercase letters.");
  }
  

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
