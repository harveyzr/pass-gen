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
  if (isNaN (passwordLength)) {
    alert("password length must be a number");
    return "Try Again!"
  }
  console.log(passwordLength);
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
  
  

  var guranteedCharacters = "" 
  var totalstring = ""
  if (lowerCases){
    totalstring += lowerstring
    guranteedCharacters += lowerstring[Math.floor (Math.random () * lowerstring.length)]
  }
  if (upperCases){
    totalstring += upperstring   
    guranteedCharacters += upperstring[Math.floor (Math.random () * upperstring.length)]
  }
  if (numbers){
    totalstring += numberstring
    guranteedCharacters += numberstring[Math.floor (Math.random () * numberstring.length)]
  }
  if (special){
    totalstring += symbols
    guranteedCharacters += symbols[Math.floor (Math.random () * symbols.length)]
  }
  console.log (guranteedCharacters)
  console.log (totalstring)

  //math to pick randomly 
  var totalARR = totalstring.split ("")
  var passArray = []
  console.log (totalARR)
  for(var i = 0;i < passwordLength; i++) {
    var index =Math.floor (Math.random () * totalARR.length)
    console.log (index) 
    var character = totalARR[index] 
    passArray.push (character) 
  }
  for(var j = 0;j <guranteedCharacters.length;j++) {
    passArray[j] =guranteedCharacters[j]
  }
  return passArray.join("")
}


//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


