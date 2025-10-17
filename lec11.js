// 1 დავალება
// import fs from "fs";

// async function saveUsers() {
//   try {
    
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();

    
//     const filteredUsers = users.map(({ id, name, username, email }) => ({
//       id,
//       name,
//       username,
//       email
//     }));

    
//     fs.writeFileSync("users.json", JSON.stringify(filteredUsers, null, 2), "utf8");

//     console.log("მონაცემები წარმატებით ჩაიწერა users.json ფაილში ");
//   } catch (err) {
//     console.error("შეცდომა:", err.message);
//   }
// }

// saveUsers();







// 3 დავალება
// const fs = require("fs");
// const path = require("path");


// const carsPath = path.join(__dirname, "cars.json");


// function loadCars() {
//   if (!fs.existsSync(carsPath)) {
//     fs.writeFileSync(carsPath, "[]", "utf8");
//   }
//   const data = fs.readFileSync(carsPath, "utf8");
//   return JSON.parse(data);
// }


// function saveCars(cars) {
//   fs.writeFileSync(carsPath, JSON.stringify(cars, null, 2), "utf8");
// }


// const [,, ...args] = process.argv;

// if (args[0] === "show") {
//   const filter = args[1];
//   const cars = loadCars();

//   if (!filter) {
//     console.log(" გამოიყენე ფორმატი: node car.js show <ფერი ან წელი>");
//   } else {
//     const filtered = cars.filter(car => car.carColor.toLowerCase() === filter.toLowerCase() || String(car.carReleaseDate) === filter);
//     if (filtered.length === 0) {
//       console.log(` ვერ მოიძებნა მანქანა ფილტრით: ${filter}`);
//     } else {
//       console.log(` მანქანები ფილტრით "${filter}":`);
//       filtered.forEach(car => console.log(`• ${car.carName} | ${car.carReleaseDate} | ${car.carColor}`));
//     }
//   }

// } else if (args.length === 3) {
//   const [carName, carReleaseDate, carColor] = args;
  
  
//   if (!carName || !carReleaseDate || !carColor) {
//     console.log(" გამოიყენე ფორმატი: node car.js <სახელი> <წელი> <ფერი>");
//   } else if (isNaN(Number(carReleaseDate))) {
//     console.log(" წელის ფორმატი უნდა იყოს ნომერი (მაგ. 2020)");
//   } else {
//     const cars = loadCars();
//     cars.push({
//       carName,
//       carReleaseDate: Number(carReleaseDate),
//       carColor
//     });
//     saveCars(cars);
//     console.log(` მანქანა დამატებულია: ${carName} | ${carReleaseDate} | ${carColor}`);
//   }

// } else {
//   console.log(`
// გამოყენების გზამკვლევი:
//   node car.js <სახელი> <წელი> <ფერი>➜ მანქანის დამატება
//   node car.js show <ფერი ან წელი>➜ მანქანების ჩვენება ფილტრით
// `);
// }








// 4 დავალება
// const fs = require("fs");
// const path = require("path");
// const inputPath = path.join(__dirname, "hoho.txt");
// const outputPath = path.join(__dirname, "result.json");
// const text = fs.readFileSync(inputPath, "utf8");
// const words = text.trim().split(/\s+/).filter(Boolean).length;
// const chars = text.replace(/\s/g, '').length;
// const vowels = (text.match(/[aeiouAEIOU]/g) || []).length;
// const result = {
//   word: words,
//   vowel: vowels,
//   chars: chars
// };

// fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), "utf8");

// console.log(" შედეგი ჩაიწერა result.json-ში:", result);
