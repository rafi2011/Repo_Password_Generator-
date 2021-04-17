// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];




// Assignment code

var generateBtn = document.querySelector("#generator");
function getUserOptions() {

  // set variables for options
  
  var lowercaseChosen = false;
  var uppercaseChosen = false;
  var specialChosen = false; 
  var numericChosen = false;
  var lengthChosen;

lowercaseChosen = confirm("Would you like to use lowercase letters in your password ?");
uppercaseChosen = confirm("Would you like to use upper case letters in your passsword ?");
numericChosen = confirm("Would you like to use numeric numbers in your passsword ?");
specialChosen = confirm("Would you like to use special characters in your passsword ?");
lengthChosen = prompt("How long would you like your password to be ?");
lengthChosen.parseInt(lengthChosen)

console.log(typeof lengthChosen)




//lowercase
//uppercase
//numeric
//special
//length // between 8 -120
if (lengthChosen < 8 || lengthChosen > 128 ) {
  alert ("Plase provide a value between 8-128");
  return;
}

// build options
var userOptions = {
  lowercaseChosen,
  uppercaseChosen,
  numericChosen,
  specialChosen,
  lengthChosen,
}
//return user option

}

function generatePassword () {
  var password = "my amazing password1234!";
  var UserOptions = getUserOptions();
  
 // generate password
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);



















  
  
  


        
    