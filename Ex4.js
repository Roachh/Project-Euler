let largestPalindromic = 0;
let numberone;
let numbertwo;

function isPalindromic(number) {

  //converte pra string e inverte o número.
  let reverse = String(number).split("").reverse().join("");
  if (reverse == number) {
    return true;
  } else {
    return false;
  }
}

let minNumber = 0;

for (let i = minNumber; i < 1000; i++) {
  for (let i2 = minNumber; i2 < 1000; i2++) {
    palindromicCandidate = i * i2;
    if(isPalindromic(palindromicCandidate)) {
      if(palindromicCandidate > largestPalindromic) {
        largestPalindromic = palindromicCandidate;
        numberone = i;
        numbertwo = i2;
        if (numberone <= numbertwo) {
          minNumber = numberone;
        } else {
          minNumber = numbertwo;
        }
      }
    }
  }
}

console.log(largestPalindromic);
