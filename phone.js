
const fs = require("fs");
const path = require("path");


const contactsPath = path.join(__dirname, "contacts.json");


function loadContacts() {
  if (!fs.existsSync(contactsPath)) {
    fs.writeFileSync(contactsPath, "[]", "utf8");
  }
  const data = fs.readFileSync(contactsPath, "utf8");
  return JSON.parse(data);
}


function saveContacts(contacts) {
  fs.writeFileSync(contactsPath, JSON.stringify(contacts, null, 2), "utf8");
}


function isValidNumber(num) {
  return /^5\d{8}$/.test(num); 
}


const [,, command, arg1, arg2] = process.argv;

switch (command) {
  case "add":
    if (!arg1 || !arg2) {
      console.log(" გამოიყენე ფორმატი: node phone.js add <ნომერი> <სახელი>");
      break;
    }

    if (!isValidNumber(arg1)) {
      console.log(" არასწორი ნომრის ფორმატი. უნდა იყოს 9-ნიშნა და იწყებოდეს 5-ით (მაგ. 555123456)");
      break;
    }

    const contactsToAdd = loadContacts();
    const exists = contactsToAdd.some(c => c.number === arg1);

    if (exists) {
      console.log(" ასეთი ნომერი უკვე არსებობს სიაში!");
    } else {
      contactsToAdd.push({ number: arg1, name: arg2 });
      saveContacts(contactsToAdd);
      console.log(` კონტაქტი დამატებულია: ${arg2} (${arg1})`);
    }
    break;

  case "delete":
    if (!arg1) {
      console.log(" გამოიყენე ფორმატი: node phone.js delete <ნომერი>");
      break;
    }

    const contactsToDelete = loadContacts();
    const filtered = contactsToDelete.filter(c => c.number !== arg1);

    if (filtered.length === contactsToDelete.length) {
      console.log(" ასეთი ნომერი ვერ მოიძებნა!");
    } else {
      saveContacts(filtered);
      console.log(` ნომერი ${arg1} წაიშალა სიიდან.`);
    }
    break;

  case "show":
    const contactsToShow = loadContacts();
    if (contactsToShow.length === 0) {
      console.log(" კონტაქტების სია ცარიელია.");
    } else {
      console.log(" კონტაქტების სია:");
      contactsToShow.forEach(c => console.log(`• ${c.name}: ${c.number}`));
    }
    break;

  default:
    console.log(`
გამოყენების გზამკვლევი:
  node phone.js add <ნომერი> <სახელი>➜ კონტაქტის დამატება
  node phone.js delete <ნომერი>➜ კონტაქტის წაშლა
  node phone.js show➜ ყველა კონტაქტის ჩვენება
`);
}
