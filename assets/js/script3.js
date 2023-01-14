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


criteriaList = [];
optionScore = 0;
// Function to prompt user for password options
function getPasswordOptions() {
  
  passwordLength = parseInt(prompt('select password length (between 10-64)'));

  if (passwordLength < 10 || passwordLength > 64){
    prompt('Please select password length (between 10-64)');
  }
  else if(isNaN(passwordLength)==true){
    prompt("That' not a number");
  }
  else {criteriaList.push(passwordLength);
  }
;

  lowerCases = confirm('Do you want to include lowercase letters?');
  upperCases = confirm('Do you want to include uppercase letters?');
  numerChar = confirm('Do you want to include numeric characters?');
  specialChar = confirm('Do you want to include special characters?');
    
  
  if (lowerCases){
    criteriaList.push(lowerCasedCharacters); 
}
else optionScore ++;

  if (upperCases){
    criteriaList.push(upperCasedCharacters);
  }
  else optionScore ++;

  if (numerChar){
    criteriaList.push(numericCharacters);
  }
  else optionScore ++;

  if (specialChar){
    criteriaList.push(specialCharacters);
  }
  else optionScore ++;

  if (optionScore = 4){
    prompt('Please select at least one charcter type.')
  }
  return criteriaList;
  
};

// need to allocate the password length to each chosen array in criteria

criteriaList = getPasswordOptions();
//console.log(criteriaList);

charList = [];
distribute = Math.floor((criteriaList[0]/(criteriaList.length-1)));  

// Function for getting a random element from an array
// function getRandom(arr) {
  
// };

for (a=1; a<criteriaList.length; a++){
    x = Math.floor(Math.random()*(criteriaList.length+1));
    for (b=0; b<distribute; b++){
        y = Math.floor(Math.random()*distribute);
        charList.push(criteriaList[x].find(function(i){
            return i == criteriaList[x][y];
        }))
    };
};  

console.log(x);
console.log(y);

// Function to generate password with user input
// function generatePassword() {
    
// };

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');


// Write password to the #password input
function writePassword() {

  getPasswordOptions();    

  var password = charList.join('');
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


