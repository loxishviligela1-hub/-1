1// function getAbbr(name) {
//   if  return "";
//   const parts = name.trim().split(/\s+/);
//   const initials = parts.map(function(p) {
//     return p.charAt(0).toUpperCase()
//   });
//   return initials.join(".");
// }

//  console.log(getAbbr("John Doe"))



// 4function removeSpaces(text) {
//   let result = ""
//   for (let i = 0; i < text.length; i++) {
//     if (text[i] !== " ") {  
//       result = result + text[i]
//     }
//   }

//   return result;
// }

// console.log(removeSpaces("L A M P A R I "));



function reverseeachword(sentence) {
  const words = sentence.split(' ')
  const reversedWords = []
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    let reversed = ''
    for (let j = word.length - 1; j >= 0; j--) {
      reversed += word[j]
    }
    reversedWords.push(reversed)
  }
  return reversedWords.join(' ')
}

console.log(reverseEachWord('ნაპოლეონ ბონაპარტი'))

