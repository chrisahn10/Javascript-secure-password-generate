// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Initializes an empty string to later fill
  finalPassword = ""
  password = ""
  // Calls all the functions to get length, lowercase, uppercase, special char, and numbers
  length = getLength()
  lower = getLowerCase()
  upper = getUpperCase()
  special = getSpecialCase()
  numbers = getnumChar()
  // Adds all of the function returns into the empty string
  password = lower + upper + special + numbers
  // Uses a random number generater to add characters into the finalPassword string until the desired length is met
  for (x = 0; x < length; x++) {
    finalPassword += password.charAt(Math.floor(Math.random() * password.length))
    console.log("this has looped")
  }
  return finalPassword
}


function getLength() {
  // Gets the users desired password length between 8 and 128 characters
    var passLength = prompt("How many characters would you like your password to be? Must be between 8 and 128 characters")
  if (!passLength) {
    return
  }
  length = parseInt(passLength)
  if (length < 8) {
    alert("Password must have at least 8 characters!")
    getLength()
  }
  if (length > 128) {
    alert("Password must be at most 128 characters!")
    getLength()
  } else {
    return length
  }
}

function getLowerCase() {
  // Determines if user wants lowercase characters in the generated password
  var lowerCase = confirm("Would you like your password to have lowercase characters?")
  var lowercaseChar = "abcdefghijklmnopqrstuvwxyz"
  if (lowerCase) {
    return lowercaseChar
  } else {
    return
  }
} 

function getUpperCase() {
  // Determines if the user wants uppercase characters in the generated password
  var upperCase = confirm("Would you like your password to have uppercase characters?")
  var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  if (upperCase) {
    return uppercaseChar
  } else {
    return
  }
}

function getSpecialCase() {
  // Determines if the user wants special characters in the generated password
  var specialCase = confirm("Would you like your password to have special characters?")
  var specialCharacters ="!@#$%^&*()_+`-=[]{}|<.>?/;,"
  if (specialCase) {
    return specialCharacters
  } else {
    return
  }
}

function getnumChar() {
  // Determines if the user wants numbers in the generated password
  var numChar = confirm("Would you like your password to have numbers?")
  var numbers ="1234567890"
  if (numChar) {
    return numbers
  } else {
    return
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
