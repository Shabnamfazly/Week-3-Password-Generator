// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){

 const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 const lowerCase = "abcdefghijklmnopqrstuvwxyz";
 const Numeral= "0123456789";
 const specialChars = "/^[!@#$%^&*()_+\-=\[\]{};':\|,.<>\/?]*$/" ;

 var passwordLength = 0;
 var passwordLowercase = false;
 var passwordUppercase = false;
 var passwordSpecial = false;
 var passwordNumeral = false;

 passwordLength = window.prompt("How many characters do you want in your password?");

if (passwordLength < 8 || passwordLength > 128) {
  window.alert ( "Password should contain between 8 and 128 characters");
  return;
}
passwordLowercase = window.confirm("Click OK if you would like lowercase letters in your password");
passwordUppercase = window.confirm("Click OK if you would like uppercase letters in your password");
passwordSpecial = window.confirm("Click OK to if you would like special characters in your password");
passwordNumeral = window.confirm("Click OK if you would like numbers in your password");

if (passwordLowercase === false && passwordUppercase === false && passwordSpecial === false && passwordNumeral === false){
  window.alert ( "At least one character type must be chosen");
  return;
}
var password = "";
const availableCharacters = [];

if (passwordSpecial) {
  | availableCharacters.push(specialChars.split(""));
}
if (passwordLowercase) {
  | availableCharacters.push(lowerCase.split(""));
}
if (passwordUppercase) {
  | availableCharacters.push(upperCase.split(""));
}
if (passwordNumeral) {
  | availableCharacters.push(Numeral.split (""));
}

for ( var)
  return ( 'fjjfjffinny')
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
