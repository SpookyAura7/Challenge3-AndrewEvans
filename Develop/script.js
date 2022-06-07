// Assignment code here

function generatePassword () {
  function characterPrompt() {  
    var characterLength = window.prompt("How many characters would you like?");
      if (characterLength>= 8 && characterLength<= 128) {
        console.log(characterLength);
        window.alert("You have selected " + characterLength + "!");
      } else if (characterLength< 8 || characterLength> 128) {
        window.alert("Try Again!");
        characterPrompt();
      } else {
        window.alert("Alright smarty pants, that wasn't even a number.");
        characterPrompt();
      }
    }
  characterPrompt();
  
  var letterCase = window.confirm("Would you like to include UPPERCASE letters in your password?");
  console.log(letterCase);
  if (letterCase) {
    window.alert("It appears you desire uppercase letters in your password.");
    var letterCase = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else {
    window.alert("It appears you loathe uppercase letters. You have been relegated to lowercase letters.");
    var letterCase = "abcdefghijklmnopqrstuvwxyz";
  } console.log(letterCase)
  
  var numbers = window.confirm("Would you like to include numbers in your password?");
    console.log(numbers);
    if (numbers) {
      window.alert("It appears you desire numbers in your password.");
      var numbers = "1234567890";
    } else {
      window.alert("It appears you are too cool for numbers and they will be ommitted from your password.");
    }

  var specialChar = window.confirm("Would you like characters of the special variety in your password? (i.e. @ # $ %)");
    console.log(specialChar)
    if (specialChar) {
      window.alert("It appears you would enjoy the most special of characters in your super-secure password.");
      var specialChar = "!@#$%^&*()?"
    } else {
      window.alert("It appears the characters aren't so special after all. They will be ommitted from your password.");
    }




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
generateBtn.addEventListener("click", console.log(characterLength,numbers,uppercase,specialChar))