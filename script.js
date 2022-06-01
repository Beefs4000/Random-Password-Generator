//A lot of credit goes to Sam his tutorial class for this code

  //Create variable linked to the copy button in HTML
// const clipboardEl = document.getElementById('copy')
  //Create variable linked to the button ID in HTML
const generateBtn = document.getElementById("generate")

const resultEl = document.getElementById('password')

//copy password to clip board - tried this, no dice
// clipboardEl.addEventListener('click', () => {
//   const textarea = document.createElement('textarea');
//   const password = resultEl.innerText;

//   if(!password) {
//     return;
//   }

//   textarea.value = password;
//   document.body.appendChild(textarea);
//   textarea.select();
//   document.execCommand;
//   textarea.remove();
//   alert('Password copied to clipboard');

// })

  //Ask password length Function
function askPasswordLength(){

  //Give user the password parameters 
const passwordLength = Number(prompt("Password length between 8 - 128 characters"));

// console.log(typeof passwordLength);
//(we want the type to be a number)
  
  //User can only use numeric value
  //with a range of 8 - 128
  //will need to ask again if the input is incorrect 

  //Not a Number 
const passwordIsNan = isNaN(passwordLength); 
  // number was 0 
const fieldIsBlank = passwordLength === 0;
  // Is outside of the range <8 or >128
const OutsideOfCharacterRange = passwordLength < 8 ||  passwordLength > 128;
  // If the inputs are incorrect for any of the above, repeat function
if(passwordIsNan || fieldIsBlank || OutsideOfCharacterRange){
  return askPasswordLength();
   
}
// If correct accept and move to next function
return passwordLength;

}
// There are 4 critera the user can either accept or reject
function askCriteria(){
//ask do you want lowercase, uppercase, symbols and numbers?
const lowercaseYesNo = confirm("Do you want lowercase?")
const uppercaseYesNo = confirm("Do you want uppercase?")
const symbolYesNo = confirm("Do you want symbol?")
const numberYesNo = confirm("Do you want number?")

//User needs to select at least one criteria
if(lowercaseYesNo || uppercaseYesNo || symbolYesNo || numberYesNo){

  return{
   lowercaseYesNo,
   uppercaseYesNo,
   symbolYesNo,
   numberYesNo,
  } ;
}
//if not done, reask  
return askCriteria();
}


//when the user clicks button, generate a password by building a character set

generateBtn.addEventListener('click', function(event){

  const passwordLength = askPasswordLength();

  const criteria = askCriteria();

//build character set
//This variable creates a character set as a blank string
let characterSet = ""
// If lower case, uppercase, symbol or number is selected, variable 'characterSet' 
// is added to by the relevant string. No + and the characters would be replaced by subsequent critera
if(criteria.lowercaseYesNo ){
  characterSet = characterSet + "qwertyuiopasdfghjklzxcvbnm";
}

if(criteria.uppercaseYesNo
){
  characterSet = characterSet + "QWERTYUIOPASDFGHJKLZXCVBNM";
}

if(criteria.symbolYesNo){
  characterSet = characterSet + "`~!@#$%^&*()-_=+[{]}/?.>,<";
}

if(criteria.numberYesNo){
  characterSet = characterSet + "1234567890";

}

// This varible leaves a blank string
let password = "";
//generate the random password based on character set
//Create a loop to keep adding characters until password length is reached
//let index = 0, if Index is less than password length, add another character
for (let index = 0; index < passwordLength; index++){
//for each cycle, we want to generate a random character based on char set
//Math.random generates a decimal number, wrapping in math.floor rounds it down, * by characterset.length
const randomCharacter = characterSet[Math.floor (Math.random() * characterSet.length)];

// add this random char to password
password += randomCharacter;

}
//show the generated password in the textarea
document.getElementById('password').value = password;
});


//Random things tried

//http://www.net-comber.com/charset.html
//Math.random generates a decimal number, wrapping in math.floor rounds it down, * 26(alphabet) + 97 (where lowercase starts in Charcode)
// function getRandomLower() {
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }
//Math.random generates a decimal number, wrapping in math.floor rounds it down, * 26(alphabet) + 65 (where uppercase starts in Charcode)
// function getRandomUpper() {
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

//Math.random generates a decimal number, wrapping in math.floor rounds it down, * 10(numbers) + 48 (where numbers starts in Charcode)
// function getRandomNumber() {
//     return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }
//same as above, use the .length function to get the length of the symbols string
// function getRandomSymbol() {
//     const symbols = "`~!@#$%^&*()-_=+[{]}/?.>,<"
//     return symbols[Math.floor(Math.random() * symbols.length)]