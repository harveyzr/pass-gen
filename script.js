// Assignment Code
var generateBtn = document.querySelector("#generate");

//add rest of alphabet 
var lowerstring = "abcdefghijklmnopqrstuvwxyz";
var upperstring = lowerstring.toUpperCase();
var numberstring = "0123456789";
var symbols = "!@#$%^&*";

//fuction for number of characters, and also alert if over or under chracter length 
function generatePassword() {
  var passwordLength = parseInt(prompt("Please enter the number of chracters you want for new password. It must be more than 8 but less than 128."));
  if(passwordLength < 8 || passwordLength > 128){
    alert("password length must be greater than 8, and less than 128");
    return "Try Again!"
  }
 
  //Questions to add or not add 
  var lowerCases = confirm("Do you want lowercases in your password?");
  var upperCases = confirm("Do you want uppercases in your password");
  var numbers = confirm("Do you want numbers in your password?");
  var special = confirm("Do you want special characters in your password?");
  console.group (lowerCases, upperCases, numbers, special)
  
 
 //if statement for if all questions are no then show alert and restart
  if (lowerCases === false && upperCases === false && numbers === false && special === false){
    alert("You must say yes to one of the previous password characteristics");
    return "Try Again!"
  }
  
  //
  var totalstring = ""
  if (lowerCases){
    totalstring += lowerstring
  }
  if (upperCases){
    totalstring += upperstring   
  }
  if (numbers){
    totalstring += numberstring
  }
  if (special){
    totalstring += symbols
  }

  console.log (totalstring)

  //math to pick randomly 
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


//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


