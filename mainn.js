const fs = require("fs");
const path = require("path");


const vowelsRegex = /[aeiouAEIOU]/g;


function readTxtFilesRecursively(dir) {
  let totalWords = 0;
  let totalVowels = 0;

  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      const result = readTxtFilesRecursively(fullPath);
      totalWords += result.words;
      totalVowels += result.vowels;
    } else if (item.isFile() && path.extname(item.name) === ".txt") {
      const content = fs.readFileSync(fullPath, "utf8");

      
      const words = content.trim().split(/\s+/).filter(Boolean).length;

      
      const vowels = (content.match(vowelsRegex) || []).length;

      totalWords += words;
      totalVowels += vowels;
    }
  }

  return { words: totalWords, vowels: totalVowels };
}


const taskDir = path.join(__dirname);

const result = readTxtFilesRecursively(taskDir);

console.log(" სულ სიტყვების რაოდენობა:", result.words);
console.log(" სულ ხმოვანი ასოების რაოდენობა:", result.vowels);
