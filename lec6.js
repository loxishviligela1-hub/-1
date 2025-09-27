1// 1
// 5
// 4
// 3
// 2


2//1
// 5
// 3
// 2
// 4


3 // function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms))
// }
// async function run() {
//   console.log("დაწყება")
//   await sleep(1000)
//   console.log("1 წამი გავიდა")
// }

// run()


4// function guessnumber(target) {
//   if (target < 1 || target > 20) {
//     console.log("გთხოვ შეიყვანე რიხვი 1-დან 20-მდე")
//     return
  

//   console.log("ვეძებ რიცხვს:", target)

//   const intervalId = setinterval(() = {
//     const random = Math.floor(Math.random() * 20) + 1
//     console.log("დაგენერირდა:", random)

//     if (random == target) {
//       console.log("🎉 ვიპოვე")
//       clearinterval(intervalId)
//     }
//   }, 1000)
// }

// guessnumber(7)




5// function countdown(start, interval) {
//   if (start < 0) {
//     console.log("გთხოვ შეიყვანე 0 ან მეტი რიხვი")
//     return
//   }
//   console.log(start)

//   const timerId = setinterval(() => {
//     start-
//     console.log(start)

//     if (start === 0) {
//       clearinterval(timerId)
//     }
//   }, interval)
// }

// countdown(5, 1000)
