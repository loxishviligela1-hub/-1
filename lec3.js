1// function average(arr) {
//   let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
//   }
//   return sum / arr.length
// }

// console.log(average([2, 4, 6,]))



2// function digittize(num) {
//   return String(num)
//     .split('')
//     .reverse()
//     .map(n=>Number(n))
// }
// console.log(digittize(3531))


3//----





4// function largest(arr) {
//   let unique = [...new Set(arr)]
//   unique.sort((a, b) => b - a)
//   return unique[1]
// }
// console.log(largest([10, 40, 20, 30]))



5// ----




6// function mostfrequent(arr) {
//   let counts = {}
//   let maxcount = 0
//   let mostrepeated

//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i]

//     if (counts[num]) {
//       counts[num]++
//     } else {
//       counts[num] = 1
//     }

//     if (counts[num] > maxcount) {
//       maxcount = counts[num]
//       mostrepeated = num
//     }
//   }

//   return mostrepeated
// }

// console.log(mostfrequent([4, 5 6, 4, 5]))
