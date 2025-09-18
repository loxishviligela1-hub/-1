1// function remove(arr) {
//   let result = []
//   for (let i = 0; i < arr.length; i++) {
//     let word = arr[i]
//     result.push(word.slice(0, -1))
//   }
//   return result
// }
// console.log(remove(["one", "two", "three"]))




2// function numbers(arr) {
//   arr.sort((a, b) => a - b)

//   return arr[0] + arr[1]
// }


// console.log(numbers([19, 5, 42, 2, 77]))




3// function curency(transactions) {
//   let result = {}
//   for (let i = 0; i < transactions.length; i++) {
//     let { amount, currency } = transactions[i]
//     if (!result[currency]) {
//       result[currency] = []
//     }
//     result[currency].push({ amount })
  
//   return result
// }
// const transactions = [
//   { amount: 10, currency: "USD" },
//   { amount: 20, currency: "EUR" },
//   { amount: 5,  currency: "USD" },
//   { amount: 50, currency: "EUR" }
// ]
// console.log(curency(transactions))




4// function count(arr) {
//   let positivecount = 0
//   let negativesum = 0
//   for (let i = 0; i < arr.length; i+) {
//     if (arr[i] > 0) {
//       positivecount+
//     } else if (arr[i] < 0) {
//       negativesum += arr[i]
//     }
//   }
//   return [positivecount, negativesum]
// }

// console.log(count([1, 3, -4, 5, -62]))


5// function sum(arr) {
//   let sum = 0
//   arr.foreach(num => {
//     sum += num
//   })
//   return sum

// console.log(sum([10, 12, 4, 2]))


6// function longWords(arr) {
//   return arr
//     filter(word => word.length > 5)
//     map(word => word.touppercase())
//     join('#')          
// }
// console.log(longWordsToString(["cat", "parrot", "dog", "elephant"])



7-----