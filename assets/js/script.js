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
// Function to prompt user for password options
function getPasswordOptions() {
  
  passwordLength = prompt('select password length (between 10-64)');
  lowerCases = confirm('include lowercase');
  upperCases = confirm('include uppercase');
  numerChar = confirm('include numberic');
  specialChar = confirm('include special characters');
  
  if (lowerCases == true){
    criteriaList.push(lowerCases); 
  }

  if (upperCases == true){
    criteriaList.push(upperCases); 
  };

  if (numerChar == true){
    criteriaList.push(numerChar);
  };

  if (specialChar == true){
    criteriaList.push(specialChar);
  };

  return criteriaList;
  
};

// need to allocate the password length to each chosen array in criteria
criteriaList = getPasswordOptions();
console.log(criteriaList);
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



charList = [];



// Function for getting a random element from an array
function getRandom(arr) {

  for (a=1; a<criteriaList.length; a++){
    if (criteriaList[a] == true){
      y = getCharFrom;
    }
  };

  for (x=0; x<y.length; x++){
    charList.push(arr.find(function(i){
    return i == arr[Math.floor(Math.random() * arr.length)]
  }));
  };

};

//console.log(getRandom(lowerCasedCharacters));

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();

  // for (i=1; i<criteriaList.length; i++){
  //   if (criteriaList[i] == true){
      
  //   }
  // }

}

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