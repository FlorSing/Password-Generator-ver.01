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

/*
let passwordCriteria = {
  passwordLength: '10-64',
  characterType: [lowerCasedCharacters, upperCasedCharacters, numericCharacters, specialCharacters],  
};
*/

criteriaSet = [
  {spclChar: specialCharacters},
  {lowerCase: lowerCasedCharacters},
  {upperCase: upperCasedCharacters},
  {spclChar: specialCharacters}
 ];
 
criteriaList = [];
//criteriaList2 = [];

// Function to prompt user for password options
function getPasswordOptions() {
  
  passwordLength = prompt('select password length (between 10-64)');
  lowerCases = confirm('include lowercase');
  upperCases = confirm('include uppercase');
  numerChar = confirm('include numberic');
  specialChar = confirm('include special characters');
  
  criteriaList.push(passwordLength);

  if (lowerCases == true){
    criteriaList.push(lowerCasedCharacters); 
//    criteriaList2.push(lowerCases);
  }

  if (upperCases == true){
    criteriaList.push(upperCasedCharacters);
 //   criteriaList2.push(upperCases); 
  };

  if (numerChar == true){
    criteriaList.push(numericCharacters);
//    criteriaList2.push(numerChar);
  };

  if (specialChar == true){
    criteriaList.push(specialCharacters);
 //   criteriaList2.push(specialChar);
  };

  return criteriaList;
  
};

// need to allocate the password length to each chosen array in criteria
criteriaList = getPasswordOptions();
console.log(criteriaList);
// console.log(criteriaList2);

//console.log(passwordLength);
// useArr = 0;
// for (i=0;i<criteriaList.length;i++){
//   if (criteriaList[i] == true){
//   useArr += 1;
//   };};
// //console.log(useArr);

// charCount = Math.ceil(Number(criteriaList[0])/useArr);
// //console.log(charCount);
// //lowerCasedCharacters.forEach()
// selectChar = [];
// for (i=5;i>5;i--){
//   selectChar.push(arr[i]); 
// };
// return selectChar;
//console.log(selectChar);

distributeLength = Math.floor((Number(criteriaList[0])/(criteriaList.length-1)));  
console.log(distributeLength);
charList = [];
// Function for getting a random element from an array
function getRandom(arr) {

  for (x=0; x<distributeLength; x++){
    y = Math.floor(Math.random()*distributeLength);
    charList.push(arr.find(function(i){
    return i == arr[y];
  }));

  }
  return charList;

};

console.log(charList);

getRandom(criteriaList[1]);



// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();

  for (a=1; a<criteriaList.length; a++){
    getRandom(criteriaList[a])  
  };
  

};

console.log(criteriaList[1]);

for (a=1; a<criteriaList.length; a++){
  getRandom(criteriaList[a])  
};
  

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


//console.log(passwordLength);
//console.log(criteriaSet);