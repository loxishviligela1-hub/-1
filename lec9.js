// 1
// class Todo {
//   constructor(id, title) {
//     this.id = id;
//     this.title = title;
//     this.isDone = false;
//     this.createdAt = new Date();
//   }
// }

// class TodoList {
//   constructor() {
//     this.todos = [];
//   }

//   addTodo(title) {
//     const id = Date.now();
//     const todo = new Todo(id, title);
//     this.todos.push(todo);
//     return todo;
//   }

//   removeTodo(id) {
//     this.todos = this.todos.filter(todo => todo.id !== id);
//   }

//   checkActiveTodo(id) {
//     const todo = this.todos.find(t => t.id === id);
//     if (todo) {
//       todo.isDone = !todo.isDone;
//     }
//   }

//   getTodos(filter = "all") {
//     switch (filter) {
//       case "active":
//         return this.todos.filter(t => !t.isDone);
//       case "done":
//         return this.todos.filter(t => t.isDone);
//       default:
//         return this.todos;
//     }
//   }


//   getAllTodos(options = {}) {
//     if (options.active === true) {
//       return this.todos.filter(t => !t.isDone);
//     } else if (options.active === false) {
//       return this.todos.filter(t => t.isDone);
//     } else {
//       return this.todos;
//     }
//   }
// }


// const todoList = new TodoList();

// todoList.addTodo("სწავლა JavaScript");
// todoList.addTodo("კოდის ტესტირება");

// console.log("ყველა:", todoList.getTodos());
// todoList.checkActiveTodo(todoList.todos[0].id);
// console.log("შესრულებული:", todoList.getTodos("done"));
// console.log("არასრულებული:", todoList.getTodos("active"));



2
// class Product {
//   constructor(id, name, price) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//   }
// }


// class ShoppingCart {
//   constructor() {
//     this.items = [];
//   }


//   addToCart(product, quantity = 1) {
//     const existingItem = this.items.find(item => item.product.id === product.id);

//     if (existingItem) {
//       existingItem.quantity += quantity;
//     } else {
//       this.items.push({ product, quantity });
//     }
//   }


//   removeFromCart(productId) {
//     this.items = this.items.filter(item => item.product.id !== productId);
//   }


//   updateItem(productId, newQuantity) {
//     const item = this.items.find(item => item.product.id === productId);
//     if (item) {
//       if (newQuantity <= 0) {
//         this.removeFromCart(productId);
//       } else {
//         item.quantity = newQuantity;
//       }
//     }
//   }


//   calculateTotalPrice() {
//     return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
//   }


//   showCart() {
//     console.log(კალათა:");
//     this.items.forEach(item => {
//       console.log(`- ${item.product.name} x${item.quantity} = ${item.product.price * item.quantity}₾`);
//     });
//     console.log("სულ:", this.calculateTotalPrice(), "₾");
//   }
// }


// const cart = new ShoppingCart();

// const apple = new Product(1, "ვაშლი", 2);

// const banana = new Product(2, "ბანანი", 3);

// const milk = new Product(3, "რძე", 5);

// cart.addToCart(apple, 3);

// cart.addToCart(banana, 2);

// cart.addToCart(milk, 1);

// cart.updateItem(2, 5);

// cart.removeFromCart(3);

// cart.showCart();







3
// class Book {
//   constructor(id, title, author, year) {
//     this.id = id;
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }
// }


// class Library {
//   constructor() {
//     this.books = [];
//   }


//   addBook(book) {
 
//     const exists = this.books.find(b => b.id === book.id);
//     if (!exists) {
//       this.books.push(book);
//     } else {
//       console.log(` წიგნი ID ${book.id}-ით უკვე არსებობს.`);
//     }
//   }


//   removeBook(id) {
//     const before = this.books.length;
//     this.books = this.books.filter(b => b.id !== id);
//     if (this.books.length === before) {
//       console.log(` წიგნი ID ${id} ვერ მოიძებნა.`);
//     }
//   }

  
//   listBooks(sortBy = null) {
//     let sortedBooks = [...this.books];

//     if (sortBy === "year") {
//       sortedBooks.sort((a, b) => a.year - b.year);
//     } else if (sortBy === "title") {
//       sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
//     } else if (sortBy === "author") {
//       sortedBooks.sort((a, b) => a.author.localeCompare(b.author));
//     }


//     console.log(" ბიბლიოთეკის წიგნები:");
//     sortedBooks.forEach(book => {
//       console.log(`- "${book.title}" (${book.year}) — ${book.author}`);
//     });

//     return sortedBooks;
//   }
// }

// const library = new Library();


// library.addBook(new Book(1, "ვეფხისტყაოსანი", "შოთა რუსთაველი", 1200));

// library.addBook(new Book(2, "თვალსაზრისი", "გაბრიელ გარსია მარკესი", 1967));

// library.addBook(new Book(3, "ჰარი პოტერი", "ჯოან როულინგი", 1997));


// library.removeBook(99);

// library.removeBook(2);

// library.listBooks("year");

// library.listBooks("title");









4
// class Contact {
//   constructor(name, phone, email) {
//     this.name = name;
//     this.phone = phone;
//     this.email = email;
//   }
// }

// class ContactManager {
//   constructor() {
//     this.contacts = [];
//   }

//   addNewContact(name, phone, email) {
 
//     const duplicate = this.contacts.find(
//       (c) => c.phone === phone || c.email === email
//     );

//     if (duplicate) {
//       console.log(" კონტაქტი იგივე ნომრით ან იმეილით უკვე არსებობს!");
//       return;
//     }

//     const newContact = new Contact(name, phone, email);
//     this.contacts.push(newContact);
//     console.log(` ${name} წარმატებით დაემატა.`);
//   }

//   viewAllContacts() {
//     console.log(" ყველა კონტაქტი:");
//     if (this.contacts.length === 0) {
//       console.log("სია ცარიელია.");
//       return;
//     }

//     this.contacts.forEach((c, i) => {
//       console.log(
//         `${i + 1}. ${c.name} —  ${c.phone} —  ${c.email}`
//       );
//     });
//   }

//   updatePhone(email, newPhone) {
//     const contact = this.contacts.find((c) => c.email === email);

//     if (!contact) {
//       console.log(" კონტაქტი ამ იმეილით ვერ მოიძებნა.");
//       return;
//     }


//     const phoneExists = this.contacts.find((c) => c.phone === newPhone);
//     if (phoneExists) {
//       console.log(" ეს ნომერი უკვე სხვა კონტაქტს აქვს.");
//       return;
//     }

//     contact.phone = newPhone;
//     console.log(` ნომერი განახლდა კონტაქტისთვის: ${contact.name}`);
//   }

 
//   deleteContact(email) {
//     const before = this.contacts.length;
//     this.contacts = this.contacts.filter((c) => c.email !== email);

//     if (this.contacts.length < before) {
//       console.log(`კონტაქტი (${email}) წარმატებით წაიშალა.`);
//     } else {
//       console.log("  კონტაქტი ვერ მოიძებნა.");
//     }
//   }
// }


// const manager = new ContactManager();

// manager.addNewContact("გელა ლოხიშვილი", "555111222", "gelako15@mail.com");

// manager.addNewContact("ჯუბა ნოზაძე", "555333444", "juba2@mail.com");

// manager.addNewContact("ქეთი ლომაძე", "555333444", "keto3@mail.com");

// manager.viewAllContacts();

// manager.updatePhone("juba2@mail.com", "555999888");

// manager.updatePhone("juba22@mail.com", "555111222");

// manager.deleteContact("gelako15@mail.com");
// manager.viewAllContacts();
