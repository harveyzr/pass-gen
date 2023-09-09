// Assignment Code
var generateBtn = document.querySelector("#generate");

//add rest of alphabet 
var lowerstring = "abcdefghijklmnopqrstuvwxyz";

//touppercase() method
var upperstring = lowerstring.toUpperCase();
function generatePassword() {
  var passwordLength = parseInt(prompt("Please enter the number of chracters you want for new password. It must be more than 8 but less than 128."));
  if(passwordLength < 8 || passwordLength > 128){
    alert("password length must be greater than 8, and less than 128");
    return "Try Again!"
  }
  var lowerCases = confirm("Do you want numbers in your password?");
  var upperCases = confirm("Do you want uppercases in your password");
  var numbers = confirm("Do you want numbers in your password?");
  var special = confirm("Do you want special characters in your password?");
  console.group (lowerCases, upperCases, numbers, special)
  if (lowerCases === false && upperCases === false && numbers === false && special === false){
    alert("password length must be greater than 8, and less than 128");
    return "Try Again!"
  }
  var totalstring = ""
  if (lowerCases){
    totalstring += lowerstring
  }
  if (upperCases){
    totalstring += upperstring   
  }

  console.log (totalstring)
  var totalARR = totalstring.split ("")
  var passString = "" 
  console.log (totalARR)
  for(var i = 0;i < passwordLength; i++) {
    var j =Math.floor (Math.random () * totalARR.length)
    console.log (j) 
    var character = totalARR[j] 
    passString += character
  }
  return passString
}
// if(confirm("would you like lowercase letters")){//add lowercase string to empty string using concat}
// return "fake password"
// }


// Write password to the #password input
function writePassword() {
  var password = generatePassword("Zach","Amanda");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Special Characters for function
const specialCharacters = "!@#$%^&*()";

//Prompts that come up after you click generate password

//Minimum count
var minimumCount = 0;

var minimumNumbers = "";
var minimumLowerCases = "";
var minimumUpperCases = "";
var minimumSpecialCharacters = "";

//Generate 
var functionArray = [ 
  function getNumbers() {
    return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
  },
  function getLowerCases() { 
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
  },
  function getUpperCases() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
  },
  function getSpecialCharacters() {
    return specialCharacters(Math.floor(Math.random() * specialCharacters.length));
}
]