// linked the html to javascript
const characterAmount = document.getElementById
('characterAmount')
const numberAmount = document.getElementById
('numberAmount')
const includeUppercaseLettersElement = document.getElementById
('includeUppercaseLetters')
const includeNumbersElement = document.getElementById
('includeNumbers')
const includeSymbolsElement = document.getElementById
('includeSymbol')
const form=document.getElementById('passwordGeneratorButton')

const SYMBOL_CHAR_CODES= arrayFromLowToHigh(33,47)
const NUMBER_CHAR_CODES= arrayFromLowToHigh(48,57)
const UPPERCASE_CHAR_CODES= arrayFromLowToHigh(97,122)
const LOWERCASE_CHAR_CODES= arrayFromLowToHigh(65,90)
arrayFromLowToHigh(58, 64)
concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

// synced number up to the slider bar so both change
characterAmount.addEventListener('input', syncCharacterAmount)
numberAmount.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e =>{
    e.preventDefault()
    const characterAmount = numberAmount.value
    const includeUppercaseLetters = includeUppercaseElement.checked
    const includeSymbols = includeNumbersElement.checked
    const includeNumbers = includeSymbolElement.checked
        const password= generatePassword(characterAmount, includeUppercaseLetters,includeNumbers,includeSymbols)
})
// created function for generate password so password actually works
function generatePassword(characterAmount,includeNumbers,includeUppercaseLetters,includeSymbol){
     String.fromCharCode(65)
}
 function arrayFromHighToLow(low,high){
    const array =[]
    for (let i =low; i<=high; i++)
    array.push(i)
    return array
 }


function syncCharacterAmount(e){
    const value = e.target.value
    characterAmount.value= value
    numberAmount.value =value
}

function generatePassword(characterAmount, includeUppercaseLetters, includeNumbers, includeSymbol) {
    let charCodes = LOWERCASE_CHAR_CODES
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES) }