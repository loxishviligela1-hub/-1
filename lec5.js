1// function remove(obj, prop) {
//   let newObj = { ...obj }
//   delete newObj[prop]
//   return newObj
// }
// let person = { name: "gela", age:16, city:"kareli" }

// let result = remove(person,"age")
// console.log(result)




2// function board(ar){
//   return arr
//     .sort((a, b) => b score - a score)
//     .map((player, index) => {
//       return {
//         player,
//         rank:index + 1
//       }
//     })
// }
// let players = [
//   { name: "Ana", score: 50 }
//   { name: "Nika", score: 80 }
//   { name: "Luka", score: 70 }
// ];

// console.log(board(player))




3// function title(movie) {
//   return movie.reduce((longest, current) => {
//     return current.title.length > longest.tile.length  curent : longest
//   })
// }

// let films = [
//   { title: "Up", year: 2009 },
//   { title: "The Lord of the Rings", year: 2001 }
// ]
// console.log(title(films))




4// function age(employes) {
//   let result = {}

//   employees.each(emp => {
//     if (result[emp.dept]) {
//       result[emp.dept] = { sum: 0, count: }
//     }
//     result[emp.dept].sum += emp.age
//     result[emp.dept].count += 1
//   })
//   object.keys(result).each(dept => {
//     result[dept] = math.round(result[dept].sum / result[dept].count)
//   })

//   return result
// }
// let staff = [
//   { name: "Ana", dept: "HR", age: 25 }
//   { name: "Nika", dept: "IT", age: 30 }
//   { name: "Luka", dept: "IT", age: 22 }
// ]
// console.log(age(staff))








5// function words(coments) {
//   return comments.reduce((total, item) => {
//     if (!item.comment) return total

//     let words = item.comment.trim().split(\s+/)
//     return total + words.length
//   }, 0)
// }

// let arr = [
//   { id: 1, comment: "Hello world" }
//   { id: 2, comment: "This is great!" }
//   { id: 3, comment: "" }
// ]
// console.log(words(arr))
