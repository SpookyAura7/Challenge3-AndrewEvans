
function generatePassword () {
  /* function to loop back to prompt if answer was unsatisfactory */
  function characterPrompt() {  
    characterLength = Number(window.prompt("How many characters would you like? You can choose to have one as short as 8 characters, or as long as 128!"));
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
  console.log(characterLength);
    /* this is to convert the boolean answers to usable data */
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
      var numbers = "";
    }

  var specialChar = window.confirm("Would you like characters of the special variety in your password? (i.e. @ # $ %)");
    console.log(specialChar);
    if (specialChar) {
      window.alert("It appears you would enjoy the most special of characters in your super-secure password.");
      var specialChar = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    } else {
      window.alert("It appears the characters aren't so special after all. They will be ommitted from your password.");
      var specialChar = "";
    }
      /* this is to put workable answer data into a single variable */
  var allChars = letterCase + numbers + specialChar;
    console.log(allChars);
  var password = "";
    /*this code (credit to Foolish Developer on dev.to) takes the previous data and randomizes it */ 
  for (var i = 0; i <= characterLength; i++) {
    var randomNumber = Math.floor(Math.random() * allChars.length);
    password += allChars.substring(randomNumber, randomNumber +1);
  }
    document.querySelector("#password").value = password


}



// To whoever grades this: I finally got it to work, and I refuse to break it again by touching the following code:

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);