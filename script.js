// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  finalPassword = ""
  password = ""
  length = getLength()
  lower = getLowerCase()
  upper = getUpperCase()
  special = getSpecialCase()
  numbers = getnumChar()
  password = lower + upper + special + numbers
  for (x = 0; x < length; x++) {
    finalPassword += password.charAt(Math.floor(Math.random() * password.length))
    console.log("this has looped")
  }
  return finalPassword
}


function getLength() {
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
  var lowerCase = confirm("Would you like your password to have lowercase characters?")
  var lowercaseChar = "abcdefghijklmnopqrstuvwxyz"
  if (lowerCase) {
    return lowercaseChar
  } else {
    return
  }
} 

function getUpperCase() {
  var upperCase = confirm("Would you like your password to have uppercase characters?")
  var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  if (upperCase) {
    return uppercaseChar
  } else {
    return
  }
}

function getSpecialCase() {
  var specialCase = confirm("Would you like your password to have special characters?")
  var specialCharacters ="!@#$%^&*()_+`-=[]{}|<.>?/;,"
  if (specialCase) {
    return specialCharacters
  } else {
    return
  }
}

function getnumChar() {
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
